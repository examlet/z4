<script setup lang="ts">
</script>

<template>
    <NuxtLayout name="index">
        <section id="start" pt="48px lg:94px">
            <div relative w="298px sm:480px md:640px lg:768px xl:1024px" h-full mx-auto>
                <h1 fw-500 leading="120%" text="26px xl:62px">
                    Все, что нужно
                    <br xl:hidden />для работы
                    <br hidden sm:block /> со своими
                    <br sm:hidden> клиентами
                    <img ml-5px src="/img/vk.svg" alt="ВКонтакте" width="auto" height="auto" h="20px xl:48px" inline />
                    вконтакте
                </h1>
                <h2 text="center sm:left 14px xl:36px" mt-20px fw-500 leading="110%">
                    от запуска рекламы до сквозной аналитики
                </h2>
                <div grid>
                    <div p="32px sm:84px" pt-48px pb-0 col-start="sm:2" row-start="sm:1">
                        <img src="/img/start.png" alt="">
                    </div>
                    <div pt="24px lg:128px" col-start="sm:1" row-start="sm:1">
                        <div text="14px xl:20px">
                            После подключения начислим 500₽ на счет,<br />
                            чтобы вы смогли протестировать сервис
                        </div>
                        <QButton mt="10px sm:20px" h="36px sm:46px" text="14px sm:16px [#ffffff]" w="full sm:320px">
                            ПОДКЛЮЧИТЬ СООБЩЕСТВО
                        </QButton>
                        <div cursor-pointer text="14px xl:20px" mt-40px animate-bounce-alt animate-count-1 animate-1s>
                            <a onclick="document.getElementById('about').scrollIntoView();">
                                <div i-carbon-sort-descending w-40px />
                                <span>Подробнее о сервисе</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section h-400px>
        </section>
    </NuxtLayout>
</template>

<style scoped>
</style>