import { Res, HttpStatus, Response } from '@nestjs/common';

export class AppResponse {
    static ok (@Res() res, values: any, message: string = ""):
    Response {
        return res.status(HttpStatus.OK).json({
            "values": values,
            "message": message
        });
    }

    static badRequest (@Res() res, values: any, message: string = ""):
    Response {
        return res.status(HttpStatus.BAD_REQUEST).json({
            "values": values,
            "message": message
        });
    }
}