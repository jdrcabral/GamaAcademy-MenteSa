import {Request, Response} from 'express';


export class UserController {
    static create(request: Request, response: Response) {
        response.status(201).send({ created: 'Ok' });
    }

    static list(request: Request, response: Response) {
        response.status(200).send({ list: 'Ok' });
    }

    static partialUpdate(request: Request, response: Response) {
        response.status(200).send({ update: 'Ok' });
        
    }

    static delete(request: Request, response: Response) {
        response.status(204).send({ deleted: 'Ok' });
    }
}