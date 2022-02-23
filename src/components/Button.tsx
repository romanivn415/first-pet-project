import React, {FC} from 'react'
import styles from './button.module.scss'

interface ButtonProps{
    variant: 'stroke' | 'colored' | 'bright' | 'simple';
    size: 'small' | 'medium' | 'large';
    icon?: 'left' | 'right';
}

const Button: FC<ButtonProps> = ({variant, size, icon, children}) => {
    return(
        <button
        className={
            styles[variant] + ' ' + size + ' ' + (icon || '')
        }
        >
            children
        </button>
    )
}
export default Button;