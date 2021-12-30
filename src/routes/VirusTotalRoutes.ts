import axios from 'axios';
import {Request, Response} from 'express';
import BaseRoutes from './BaseRoutes';

export class VirusTotalRoutes extends BaseRoutes {

    constructor() {
        super('https://www.virustotal.com/api/v3');
    }

    override async getByIp(req: Request, res: Response): Promise<void> {
        const { ip } = req.params;
        const { data } = await axios.get(`${this.baseUrl}/ip_addresses/${ip}`, {
            headers: {
                'x-apikey': process.env.VIRUSTOTAL_KEY || ''
            }
        });
        res.json({ data });
    }
}

const virusTotalRoutes = new VirusTotalRoutes();

export default virusTotalRoutes.router;

