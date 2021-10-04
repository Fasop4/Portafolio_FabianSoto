import express from 'express';
const router = express.Router();

/*get home page*/
router.get('/', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Home'});
});

router.get('/about', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('about', { title: 'About'});
});

router.get('/projects', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('project', { title: 'Projects'});
});

router.get('/services', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('service', { title: 'Services'});
});

router.get('/contact', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('contact', { title: 'Contact'});
});

export default router;
