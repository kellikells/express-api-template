import express from 'express';
import { indexPage } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);

export default indexRouter;


// import express from 'express';
// import { testEnvironmentVariable } from '../settings';

// const indexRouter = express.Router();

// indexRouter.get('/', (req, res) => res.status(200).json({ message: testEnvironmentVariable }));

// export default indexRouter;