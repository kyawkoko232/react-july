import className from "classnames";

const finalClassName = className({
    'btn-primary' : true,
    'text-yellow-500' : true,

    
})
console.log(finalClassName)

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
    console.log(rest)
    const classes = className('btn btn-sm', {
        'btn-primary' : primary,
        'btn-secondary': secondary,
        'btn-success' : success,
        'btn-warning' : warning,
        'btn-danger' : danger,
        'btn-outline' : outline,
        'btn-rounded' : rounded,
        'text-blue-500' : outline && primary,
        'text-gray-500' : outline && secondary,
        'text-green-500' : outline && success,
        'text-yellow-400' : outline && warning,
        'text-red-500' : outline && danger,
        
    })
  return <button {...rest}  className={classes}>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default Button;
