function requiredParam (param) {
    const requiredParamError = new Error(
     `Required parameter, "${param}" is missing.`
    )

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(
        requiredParamError, 
        requiredParam
      )
    }
    throw requiredParamError
  }

const showUser = ({name, age, hobby = 'tennis', role = requiredParam('role')} = {}) => {
    console.log(`${name} is ${age} and likes ${hobby}`);
};

showUser();

// const options = {
//     role: 'Admin',
//     includeInactive: true
//   }
//   findUsersByRole(options)
//   function findUsersByRole ({
//     role,
//     withContactInfo, 
//     includeInactive
//   } = {}) {
//     role = role.toLowerCase();
//     console.log(role) // 'admin'

//   }
//   console.log(options.role) // 'Admin'