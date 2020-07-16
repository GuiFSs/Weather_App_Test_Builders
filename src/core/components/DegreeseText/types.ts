export interface IProps extends IDegreesProps, IUnitProps {
  degrees: number
}

export interface IDegreesProps {
  degreesTextSize?: number
}

export interface IUnitProps {
  unitTextSize?: number
  aligned?: boolean
}
