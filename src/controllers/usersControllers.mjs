import { db } from "../models/db.mjs";

/**
 * Add a user in de database.
 * @param {*} request 
 * @param {*} response 
 */
export function postUserController (request, response) {
    const {name, password} = request.body;
    const sql = `
    INSERT INTO users ( name, password )
    values ( '${name}' , '${password}' )
    `;
    db.run(sql);
    response.sendStatus(201)
}

export function getAllUsersController(request, response){
    console.log("hello");
    response.send("this shit works");
}