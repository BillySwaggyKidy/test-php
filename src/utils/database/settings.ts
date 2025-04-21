import { IDBSettings } from "@/types/common"

// this function is used to give the database connect settings depending of the env variables (dev, prod)
export const GetDBSettings = (): IDBSettings => {
    const env = process.env.NODE_ENV
  
    if (env == 'development')
      return {
        host: process.env.host_dev!,
  
        port: parseInt(process.env.port_dev!),
  
        user: process.env.user_dev!,
  
        password: process.env.password_dev!,
  
        database: process.env.database_dev!,
      }
    else
      return {
        host: process.env.host_prod!,
  
        port: parseInt(process.env.port_prod!),
  
        user: process.env.user_prod!,
  
        password: process.env.password_prod!,
  
        database: process.env.database_prod!,
      }
  }