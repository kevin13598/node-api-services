import axios from 'axios';
import {Request, Response} from 'express';
import BaseRoutes from './BaseRoutes';

export class ReverseDNSRoutes extends BaseRoutes {

    constructor() {
        super('https://api.domaintools.com/v1/');
    }

    override async getByIp(req: Request, res: Response): Promise<void> {
        const { ip } = req.params;
        const { data } = await axios.get(`${this.baseUrl}/${ip}/host-domains`);
        res.json({ data });
    }
}

const reverseDNSRoutes = new ReverseDNSRoutes();

export default reverseDNSRoutes.router;

