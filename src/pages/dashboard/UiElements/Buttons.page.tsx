import { EnvelopeIcon, ArrowRightIcon, ShoppingCartIcon } from "@heroicons/react/16/solid";
import { Breadcrumb, ColoredButton, GradientButton, LoadingButton, OutlineButton, PillButton, SimpleButton } from "../../../components";

export const Buttons = () => {
    return (
        <>
            <Breadcrumb pageName="Ui elements / Buttons" />

            <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4 ">
                <div className="flex flex-col gap-4">
                    {/* <!-- Simple Buttons --> */}
                    <div className="rounded-lg shadow-md bg-white dark:bg-gray-900">

                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Simple Buttons
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4">

                            <SimpleButton title={'Blue'} color={'blue'} />
                            <SimpleButton title={'Gray'} color={'gray'} />
                            <SimpleButton title={'Dark'} color={'Dark'} />
                            <SimpleButton title={'Light'} color={'Light'} />
                            <SimpleButton title={'Green'} color={'green'} />
                            <SimpleButton title={'Red'} color={'red'} />
                            <SimpleButton title={'Yellow'} color={'yellow'} />
                            <SimpleButton title={'Indigo'} color={'indigo'} />

                        </div>

                    </div>

                    {/* <!-- Button pills --> */}
                    <div className="rounded-lg shadow-md bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Button pills
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4">

                            <PillButton title={'Blue'} color={'blue'} />
                            <PillButton title={'Gray'} color={'gray'} />
                            <PillButton title={'Dark'} color={'Dark'} />
                            <PillButton title={'Light'} color={'Light'} />
                            <PillButton title={'Green'} color={'green'} />
                            <PillButton title={'Red'} color={'red'} />
                            <PillButton title={'Yellow'} color={'yellow'} />
                            <PillButton title={'Indigo'} color={'indigo'} />

                        </div>
                    </div>

                    {/* <!--  Gradient monochrome --> */}
                    <div className="rounded-lg shadow-md bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Gradient monochrome
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4">

                            <GradientButton title={'Blue'} color={'blue'} />
                            <GradientButton title={'Green'} color={'green'} />
                            <GradientButton title={'Cyan'} color={'cyan'} />
                            <GradientButton title={'Lime'} color={'lime'} />
                            <GradientButton title={'Red'} color={'red'} />
                            <GradientButton title={'Teal'} color={'teal'} />
                            <GradientButton title={'Pink'} color={'pink'} />
                            <GradientButton title={'Indigo'} color={'indigo'} />

                        </div>
                    </div>

                    {/* <!--  Colored shadows   --> */}
                    <div className="rounded-lg shadow-md bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Colored shadows
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4">

                            <ColoredButton gradient="purple-blue" title="Purple to Blue" />
                            <ColoredButton gradient="cyan-blue" title="Cyan to Blue" />
                            <ColoredButton gradient="green-blue" title="Green to Blue" />
                            <ColoredButton gradient="indigo-pink" title="Indigo to Pink" />
                            <ColoredButton gradient="pink-orange" title="Pink to Orange" />
                            <ColoredButton gradient="teal-lime" title="Teal to Lime" />
                            <ColoredButton gradient="red-yellow" title="Red to Yellow" />


                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-4">
                    {/* <!-- Outline buttons  --> */}
                    <div className="rounded-lg shadow-md bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Outline buttons
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4">

                            <OutlineButton variant="blue" title="Blue" />
                            <OutlineButton variant="Dark" title="Dark" />
                            <OutlineButton variant="green" title="Green" />
                            <OutlineButton variant="red" title="Red" />
                            <OutlineButton variant="yellow" title="Yellow" />
                            <OutlineButton variant="indigo" title="Indigo" />

                        </div>
                    </div>


                    {/* <!-- Button sizes  --> */}
                    <div className="rounded-lg shadow-md bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Button sizes
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 xl:grid-cols-5 place-items-center">

                            <SimpleButton title={'ex small'} color={'blue'} size="xs" />
                            <SimpleButton title={'small'} color={'blue'} size="sm" />
                            <SimpleButton title={'base'} color={'blue'} size="md" />
                            <SimpleButton title={'large'} color={'blue'} size="lg" />
                            <SimpleButton title={'extra large'} color={'blue'} size="xl" />

                            <SimpleButton leftIcon={<EnvelopeIcon aria-hidden="true" className="h-2.5 w-2.5 me-1 mt-0.5" />} title={'ex small'} color={'blue'} size="xs" />
                            <SimpleButton leftIcon={<EnvelopeIcon aria-hidden="true" className="h-2.5 w-2.5 me-1 mt-0.5" />} title={'small'} color={'blue'} size="sm" />
                            <SimpleButton leftIcon={<EnvelopeIcon aria-hidden="true" className="h-3.5 w-3.5 me-1" />} title={'base'} color={'blue'} size="md" />
                            <SimpleButton leftIcon={<EnvelopeIcon aria-hidden="true" className="h-4 w-4 me-1" />} title={'large'} color={'blue'} size="lg" />
                            <SimpleButton leftIcon={<EnvelopeIcon aria-hidden="true" className="h-4 w-4 me-1" />} title={'ext larg'} color={'blue'} size="xl" />



                        </div>
                    </div>
                    {/* <!-- Loader   --> */}
                    <div className="rounded-lg shadow-md bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Loader
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 xl:grid-cols-5 place-items-center">

                            <LoadingButton color="blue" text="Loading..." />
                            <LoadingButton color="red" text="Loading..." />
                            <LoadingButton color="gray" text="Loading..." />
                            <LoadingButton color="indigo" text="Loading..." />
                            <LoadingButton color="blue" text="Loading..." disabled={true} />

                        </div>
                    </div>

                    {/* <!--  Icon buttons  --> */}
                    <div className="rounded-lg shadow-md bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Icon buttons
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4 place-items-center">

                            <SimpleButton leftIcon={<ShoppingCartIcon aria-hidden="true" className="h-4 w-4 me-1" />} title={'Buy now'} color={'blue'} size="md" />

                            <OutlineButton rightIcon={<ArrowRightIcon aria-hidden="true" className="h-5 w-5" />} title={''} variant={'blue'} size="sm" />

                            <GradientButton leftIcon={<ShoppingCartIcon aria-hidden="true" className="h-4 w-4 me-1" />} title={'Buy now'} color={'blue'} size="md" />

                            <ColoredButton rightIcon={<ArrowRightIcon aria-hidden="true" className="h-5 w-5" />} title={''} gradient={'cyan-blue'} size="sm" />

                        </div>
                    </div>

                </div>
            </div >
        </>
    );
};