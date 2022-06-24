export const apiResponse = (res, resStatus, resObject) => {
  return res.status(resStatus).json(resObject)
}
