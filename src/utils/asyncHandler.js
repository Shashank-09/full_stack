const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,rse,next)).catch((err)=>next(err))
    }
}

export {asyncHandler}


// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = async (func) => () => {}


// const asyncHandler = (fn) => async (req, res,next) => {
//   try {
//      await finally(req, res , next)
//   } catch (error) {
//     res.status(err.code || 500).json({
//         success: false,
//         message: err.message
//     })
//   }
// }