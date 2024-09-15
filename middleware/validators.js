//need npm package npm i express-validator,
const {body} =require('express-validator');
//registation validation
const validators=[
 body('title')
  .trim()
  .notEmpty()
  .withMessage('Title is require.Enter your Title')
  .isLength({min: 3, max:100})
  .withMessage('Title min charater 3 , max charater 100'),
 body('description')
  .trim()
  .notEmpty()
  .withMessage('minimun description length 4 charater')
  .isLength({max:500})
  .withMessage('maximum length 500 charater')
  ];
module.exports={validators}