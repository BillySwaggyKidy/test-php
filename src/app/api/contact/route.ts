import { NextResponse, NextRequest } from 'next/server'

import mysql, { QueryResult, ResultSetHeader } from 'mysql2/promise'
import { GetDBSettings } from '@/utils/database/settings'
import { ContactFormValues } from '@/types/form';

const connectionParams = GetDBSettings();

// handle request to get the visits data
export async function GET() {
    try {
        const connection = await mysql.createConnection(connectionParams);
        const get_exp_query = 'SELECT * FROM contact';
        const [results] = await connection.execute(get_exp_query);
        connection.end();   

        // return the results as a JSON API response
        return NextResponse.json(results)
    } 
    catch (err) {

        const response = {
            error: (err as Error).message,
            returnedStatus: 200,
        }

        return NextResponse.json(response, { status: 200 })
    }
}

// handle request to add a new contact request to the database
export async function POST(req: NextRequest) {
    try {
        const body: ContactFormValues = await req.json(); // we retrieved the contact form data from the body
    
        const {
          gender,
          name,
          lastName,
          email,
          phone,
          reason,
          message,
          availabilities, // array of time slots
        } = body;
    
        const connection = await mysql.createConnection(connectionParams);

        // first we check if the data we send are not already inside the contact table (to prevent duplicates)
        const [rows] = await connection.execute(
            `SELECT * FROM contact WHERE gender = ? AND name = ? AND lastName = ? AND email = ? AND phone = ? AND reason = ? AND message = ?`,
            [gender, name, lastName, email, phone, reason, message]
        );
          
        if ((rows as QueryResult[]).length > 0) { // if an entry exist with the same data then we don't go further
          return NextResponse.json({ message: 'Duplicate entry' }, { status: 409 })
        }
    
        // we insert into the contact table the user info, reason and message
        const [contactResult] = await connection.execute(
          `INSERT INTO contact (gender, name, lastName, email, phone, reason, message)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [gender, name, lastName, email, phone, reason, message]
        );
        
        // we retrieved the id of the entry we just inserted inside the contact table
        const contactId = (contactResult as ResultSetHeader).insertId;
    
        // we insert into the availability table all the availability data of the user
        if (Array.isArray(availabilities)) {
          for (const availability of availabilities) {
            const slot = availability.day + " à " + availability.time;
            await connection.execute(
              `INSERT INTO availability (contact_id, slot)
               VALUES (?, ?)`,
              [contactId, slot]
            );
          }
        }
    
        await connection.end();
    
        return NextResponse.json({ success: true, contactId })
    } 
    catch (err) {
        console.error('DB error:', err)
        return NextResponse.json({ success: false, error: 'Database error' }, { status: 500 })
    }
}