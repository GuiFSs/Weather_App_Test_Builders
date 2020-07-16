import { LoaderStatusEnum } from '../../../../core/enums/loaderStatus';

export interface IProps extends IContainerProps {
  keyValueList: IKeyValue[]
}

export interface IKeyValue {
  key: string
  value: string
}

export interface IContainerProps {
  loaderStatus: LoaderStatusEnum
}

export interface IWindDirectionProps {
  /** inclination */
  deg: number
}
