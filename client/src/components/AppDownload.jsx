import { assets } from '../assets/assets'


const AppDownload = () => {
    return (
        <div className='container px-4 2xl:px-20 mx-auto my-20'>
            <div className='relative bg-gradient-to-r from-violet-50 to-purple-50 p-12 sm:p-24 lg:p-32 rounded-lg'>
                <div>
                    <h1 className='text-2xl sm:text-4xl font-bold mb-8 max-w-md'>Mobile App Coming Soon!</h1>
                    <p className='mb-8 max-w-md text-gray-600'>
                        Our developers are working hard (and drinking lots of coffee ☕) to bring you a shiny new mobile app! 🚀<br/>
                        Until then, enjoy all the features right here in your browser.<br/>
                        <span className='inline-block mt-2 text-purple-500'>
                            P.S. If you keep refreshing, the app still won’t magically appear... but you can try! 😄
                        </span>
                    </p>
                </div>
                <img className='absolute w-80 right-0 bottom-0 mr-32 max-lg:hidden' src={assets.app_main_img} alt="Job portal illustration" />
            </div>
        </div>
    )
}

export default AppDownload