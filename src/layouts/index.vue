<script setup lang="ts">
const mobileMenuCollapsed = ref(true);
const toggleMobileMenu = () => (mobileMenuCollapsed.value = !mobileMenuCollapsed.value);
const scrollIntoView = (elementId: string) => {
    // document.getElementById(elementId).scrollIntoView();
    mobileMenuCollapsed.value = true;
};
</script>

<template>
    <div h-full w-full>
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
                            <span fw-600 text="24px" mb="4px">Quicklify</span>
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
        </header>

        <main fixed left-0 right-0 top-64px bottom-0 pr-10px overflow-y-auto>
            <slot />
        </main>

        <!-- <footer fixed bottom-0 left-0 right-0 h="40px sm:33px" border="t [#e7e7e7]">
            <div w="full xl:1024px" h-full mx-auto p="x-20px xl:0">
                <div mt="5px sm:10px xl:0" w-full h-full grid grid-cols="[1fr_1fr] sm:[1fr_1fr_1fr]"
                    grid-rows="[10px_10px] xl:[1fr]" gap="5px sm:0" text="sm:center" items-center>
                    <div col-span="2 sm:1" text="10px xl:12px">Текст 1</div>
                    <div active text="10px xl:12px">Текст 2</div>
                    <div active text="10px xl:12px">Текст 3</div>
                </div>
            </div>
        </footer> -->
    </div>
</template>