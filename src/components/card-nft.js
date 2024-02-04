import Image from 'next/image';

import IconHeart from '@/assets/icon-heart.svg';
import IconVerify from '@/assets/verify.svg';
import IconETH from '@/assets/icon-eth.svg';
import IconClock from '@/assets/icon-clock.svg';

export function CardNFT({thumbnail, name, value, value_brl}) {
    return (
        <div className='w-full max-w-card-nft overflow-hidden rounded-2xl border-gray-border-card bg-gray-area-favorite'>
            <div className='relative w-full h-area-image-nft overflow-hidden'>
                <Image
                    src={thumbnail}
                    alt='Nft 01'
                />

                <div className='absolute top-2 right-2 z-10 flex items-center gap-2 py-3 px-6 bg-gray-area-favorite rounded-full border-gray-border-card'>
                    <Image
                        src={IconHeart}
                        alt='Icon HEart'
                        className='w-full h-full object-cover'
                    />

                    0
                </div>
            </div>

            <div className='w-full p-4'>
                <h4 className='flex items-center gap-1 text-sm mb-1'>
                    Cartoon Collection

                    <Image
                        src={IconVerify}
                        alt='Icon Verify'
                    />
                </h4>

                <h3 className='text-lg/none font-semibold mb-4'>{ name }</h3>
            
                <div className='flex items-end justify-between mb-4'>
                    <div className='space-y-1'>
                        <span className='text-xs text-white text-opacity-70'>Preço atual</span>
                        <h3 className='flex items-center gap-1 text-lg font-semibold'>
                            <Image 
                                src={IconETH}
                                alt='Icon ETH'
                            />
                            { value } BTC
                        </h3>
                    </div>

                    <h5 className='relative bottom-1 text-xs font-medium'>R${value_brl}</h5>
                </div>

                <button className='w-full py-4 bg-blue-primary rounded-full mb-4 text-sm font-semibold hover:bg-blue-700 transition-all ease-linear'>Buy now</button>

                <div className='flex items-center gap-1'>
                    <Image
                        src={IconClock}
                        alt='Icon Clock'
                    />
                    <p className='text-xs'>Fim em 4h 8m 22s</p>
                </div>
            </div>
        </div>
    )
}