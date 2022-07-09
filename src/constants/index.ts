export const errorConstants = Object.freeze({
  ER_01: {
    code: 'ER_01',
    message: 'Something went wrong',
    status: 400,
  },
  ER_02: {
    code: 'ER_02',
    message: 'Missing required field',
    status: 400,
  },
  ER_03: {
    code: 'ER_03',
    message: 'Unauthorized. Failed to verify your Identity.',
    status: 401,
  },
  ER_04: {
    code: 'ER_04',
    message: 'Error Sending OTP',
    status: 400,
  },
})

export const successConstants = Object.freeze({
  PASS_01: {
    code: 'PASS_01',
    message: 'Data fetched Successfully',
    status: 200,
  },
  PASS_02: {
    code: 'PASS_02',
    message: 'Data updated Successfully',
    status: 200,
  },
})
export declare type Nullable<T> = T | null
export type GenericObject = Record<string, any>
