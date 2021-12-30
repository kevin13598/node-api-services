import express from 'express';
import compression from 'compression';
import cors from 'cors';
import GeoIPRoutes from './routes/GeoIPRoutes';
import * as dotenv from 'dotenv';
import RDAPRoutes from './routes/RDAPRoutes';
import ReverseDNSRoutes from './routes/ReverseDNSRoutes';
import VirusTotalRoutes from './routes/VirusTotalRoutes';

dotenv.config();

class Server {

    public app: express.Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {

        // Settings
        this.app.set('port', process.env.PORT || 3000);

        // Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(compression());
        this.app.use(cors());
    }

    routes() {
        this.app.use('/api',GeoIPRoutes);
        this.app.use('/api/geoip',GeoIPRoutes);
        this.app.use('/api/rdap',RDAPRoutes);
        this.app.use('/api/reverseDNS',ReverseDNSRoutes);
        this.app.use('/api/virus_total', VirusTotalRoutes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();