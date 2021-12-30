import { Router, Request, Response } from 'express';

class BaseRoutes {

    router: Router;
    baseUrl: string;

    constructor(baseUrl: string) {
        this.router = Router();
        this.baseUrl = baseUrl;
        this.routes();
    }

    // tslint:disable-next-line: no-empty
    async getByIp(req: Request, res: Response): Promise<void> {}

    routes() {
        this.router.get('/:ip', this.getByIp);
    }

}

export default BaseRoutes;