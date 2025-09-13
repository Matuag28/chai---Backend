const asynHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asynHandler };

// can be done byt that way also

// const asynHandler = (fn) => async (req,resizeBy,next)=>{

//     try {
//         await fn(req,resizeBy,next)
//     } catch (error) {
//         resizeBy.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })

//     }
// }
