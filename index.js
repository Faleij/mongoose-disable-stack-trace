'use strict';

const captureStackTrace = Error.captureStackTrace;
const CastError = module.parent.require('mongoose/lib/error/cast');
const VersionError = module.parent.require('mongoose/lib/error/version');
const ValidatorError = module.parent.require('mongoose/lib/error/validator');
const ValidationError = module.parent.require('mongoose/lib/error/validation');

Error.captureStackTrace = (that) => !(
  that instanceof CastError ||
  that instanceof VersionError ||
  that instanceof ValidatorError ||
  that instanceof ValidationError
  ) && captureStackTrace.apply(Error, arguments);
