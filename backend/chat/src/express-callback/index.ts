import { Request, Response, NextFunction } from "express";

type IController = (httpRequest: any) => any;
export default function makeExpressCallback(controller: IController) {
  return (req: Request, res: Response, next: NextFunction) => {
    const httpRequest = {
      context: {
        validated: Object.assign({}, req.body, req.params, req.query),
      },
      query: req.query,
      params: req.params,
      method: req.method,
      path: req.path,
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referer: req.get("referer"),
        "User-Agent": req.get("User-Agent"),
      },
    };
    controller(httpRequest)
      .then((httpResponse: any) => {
        if (httpResponse.headers) {
          res.set(httpResponse.headers);
        }
        res.type("json");
        res.status(httpResponse.statusCode).send(httpResponse.body);
      })
      .catch((errorObject) => {
        console.error("Error encountered: ", errorObject.body);
        res.status(errorObject.statusCode).send(errorObject.body);
        next(errorObject);
      });
  };
}
