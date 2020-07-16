import { StringOrNumber } from '../../types/StringOrNumber';

export interface IProps extends IDegreesProps, IUnitProps {
  degrees: StringOrNumber
}

export interface IDegreesProps {
  degreesTextSize?: number
  bold?: boolean
}

export interface IUnitProps {
  unitTextSize?: number
  aligned?: boolean
}
