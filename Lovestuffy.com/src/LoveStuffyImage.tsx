import LoveStuffy from './assets/Lovestufy.jpg'

type Props = {
    width: number;
}

export default function LoveStuffyImage({ width }: Props) {
  return (<img className='love-stuffy-image' width={width} src={LoveStuffy} alt="Love Stuffy" />);
}