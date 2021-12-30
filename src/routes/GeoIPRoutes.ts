import axios from 'axios';
import {Request, Response} from 'express';
import BaseRoutes from './BaseRoutes';

export class GeoIpRoutes extends BaseRoutes {

    constructor() {
        super('http://api.ipstack.com');
    }

    override async getByIp(req: Request, res: Response): Promise<void> {
        const { ip } = req.params;
        const params = {
            access_key: process.env.GEOIP_KEY
        }
        const { data } = await axios.get(`${this.baseUrl}/${ip}`, { params });
        res.json({ data });
    }
}

const geoIpRoutes = new GeoIpRoutes();

export default geoIpRoutes.router;

