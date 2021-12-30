import axios from 'axios';
import {Request, Response} from 'express';
import BaseRoutes from './BaseRoutes';

export class RDAPRoutes extends BaseRoutes {

    constructor() {
        super('https://domainsrdap.googleapis.com/v1');
    }

    override async getByIp(req: Request, res: Response): Promise<void> {
        const { ip } = req.params;
        const { data } = await axios.get(`${this.baseUrl}/${ip}`);
        res.json({ data });
    }
}

const rdapRoutes = new RDAPRoutes();

export default rdapRoutes.router;

