import { users } from "../models/usersModels.mjs";
import { db } from "../models/db.mjs";

export function postUserController (request, response) {
    const {name, password} = request.body;
    const sql = `
    INSERT INTO users ( name, password )
    values ( '${name}' , '${password}' )
    `;
    db.run(sql);
    
    //users.push(request.body);
    response.sendStatus(201)
}