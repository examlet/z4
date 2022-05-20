<script setup lang="ts">
const mobileMenuCollapsed = ref(true);
const toggleMobileMenu = () => (mobileMenuCollapsed.value = !mobileMenuCollapsed.value);
const scrollIntoView = (elementId: string) => {
    // document.getElementById(elementId).scrollIntoView();
    mobileMenuCollapsed.value = true;
};
</script>

<template>
    <div w-full h-full flex flex-col>
        <header fixed top-0 left-0 right-0 h-64px z-99>
            <div w-full h-full bg="[#ffffff]" border="b [#e7e7e7]" p="20px sm:0">
                <div relative w="full xl:1024px" h-full mx-auto>
                    <div flex flex-row justify-between items-center h-full>
                        <div flex items-center>
                            <div cursor-pointer flex xl:hidden items-center mr-20px @click="toggleMobileMenu">
                                <div relative inline-block w-20px h-24px space-y-1 h-full>
                                    <div bg="[#35495e]" top="-6px" w-20px h-2px rounded-4px />
                                    <div bg="[#35495e]" w-20px h-2px rounded-4px />
                                    <div bg="[#35495e]" bottom="-6px" w-20px h-2px rounded-4px />
                                </div>
                            </div>
                            <span fw-600 text="24px" mb="2px">Quicklify</span>
                            <div hidden sm:block>
                                <QLink secondary @click="scrollIntoView('features')" ml-40px>ВОЗМОЖНОСТИ</QLink>
                                <QLink secondary @click="scrollIntoView('price')" ml-20px>СТОИМОСТЬ</QLink>
                                <QLink secondary @click="scrollIntoView('faq')" ml-20px>FAQ</QLink>
                                <QLink active primary @click="scrollIntoView('action')" ml-20px>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</QLink>
                            </div>
                        </div>
                        <QButton>ВОЙТИ</QButton>
                    </div>
                </div>
            </div>
            <div class="absolute block sm:hidden bg-[#fff] rounded top-64px shadow-lg w-full transition duration-300 -z-1"
                :class="[mobileMenuCollapsed ? '-translate-y-120%' : '-translate-y-0']">
                <div flex flex-col py-14px text-18px w="full xl:1024px" px="20px sm:10px lg:0" relative mx-auto h-full>
                    <div class="h-28px">
                        <button class="flex items-center justify-start">
                            <div class="i-carbon-video-chat" />
                            <div mb-4px class="ml-10px">возможности</div>
                        </button>
                    </div>
                    <div class="h-28px mt-14px">
                        <button class="flex items-center justify-start">
                            <div class="i-carbon-document-pdf" />
                            <div mb-4px class="ml-10px">стоимость</div>
                        </button>
                    </div>
                    <div class="h-28px mt-14px">
                        <button class="flex items-center justify-start">
                            <div class="i-carbon-gift" />
                            <div mb-4px class="ml-10px">ответы на вопросы</div>
                        </button>
                    </div>
                    <div class="h-28px mt-14px mb-4px">
                        <QLink primary active>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</QLink>
                    </div>
                </div>
            </div>
        </header>

        <main flex-grow flex-shrink-0 basis-auto pt-64px>
            <slot />
        </main>

        <footer bg-gray-100 h-200px>
        </footer>
    </div>
</template>