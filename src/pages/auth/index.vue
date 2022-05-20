<script setup lang="ts">
const popup = ref(false)
const togglePopup = () => (popup.value = !popup.value)
const popup2 = ref(false)
const togglePopup2 = () => {
    popup2.value = !popup2.value;
    popup.value = !popup.value;
}
</script>

<template>
    <NuxtLayout>
        <QModal v-model="popup" class="z-99999">
            <p text="20px" fw-600 mb-20px>Ну что же, давайте начнём</p>
            <div w-540px h-200px flex items-center justify-between gap-24px>
                <div w="50%" h-full>
                    картинка
                    <p my-10px>Я хочу больше узнать о сервисе и возможностях</p>
                    <QButton w-full @click="togglePopup2">ПОДРОБНЕЕ</QButton>
                </div>
                <div w-1px h-200px bg="[#e5ebef]" />
                <div w="50%" h-full>
                    картинка
                    <p my-10px>Я все знаю и хочу начать использовать сервис</p>
                    <!-- <p>Я хочу больше узнать о школе</p> -->
                    <QButton w-full>ПРОДОЛЖИТЬ</QButton>
                </div>
            </div>
        </QModal>

        <QModal v-model="popup2" class="z-99999">
            <p text="20px" fw-600 mb-20px>Спасибо за интерес к нашей онлайн-школе</p>
            <p text="14px" fw-500>Пожалуйста, оставьте заявку и менеджер свяжется в самое ближайшее время!</p>
            <div w-540px h-200px flex items-center justify-between gap-24px>
                kek
            </div>
        </QModal>

        <header fixed top-0 left-0 right-0 h-64px z-99>
            <div absolute left="20px xl:50px" top="10px xl:30px">
                <p text="32px" fw-700>Quicklify</p>
                <h1 text="[#4d4d4d] 14px" fw-500>Продажи ВКонтакте</h1>
            </div>
        </header>

        <main fixed left-10px right-10px top-10px bottom="50px xl:43px">
            <section w="270px xl:full" mx-auto relative flex pt="84px xl:94px" h-full items-center>
                <div mx-auto>
                    <h1 text="center 16px xl:44px" fw-600 underline underline-offset="4 xl:15"
                        decoration="2 [#5c97ee] wavy">
                        Работать с клиентами — просто!
                    </h1>
                    <h2 mt="10px xl:15px" text="10px xl:18px" mx-auto fw-500>
                        <div hidden xl:flex flex-row gap-20px justify-center>
                            <p>CRM-система</p>
                            <p>Мессенджер</p>
                            <p>Рассылки</p>
                            <p>Чат-боты</p>
                            <p>Рекламный кабинет</p>
                            <p>Аналитика</p>
                        </div>
                    </h2>
                    <div flex flex-col xl:flex-row items-center justify-between gap-20px px="xl:50px" mt="24px xl:64px">
                        <div text="center xl:left" rounded w="full xl:40%" bg="[#ffffff]" border="1px [#efefef]"
                            p="12px xl:24px">
                            <div>
                                картинка
                            </div>
                            <p my="10px" text="left 16px xl:24px" fw-600>Впервые в приложении</p>
                            <QButton w="full xl:auto" @click="togglePopup">НАЧАТЬ РАБОТУ</QButton>
                        </div>
                        <div text="center xl:left" rounded w="full xl:40%" bg="[#ffffff]" border="1px [#efefef]"
                            p="12px xl:24px">
                            <div>
                                картинка
                            </div>
                            <p my="10px" text="left 16px xl:24px" fw-600>Уже пользуюсь сервисом</p>
                            <QButton w="full xl:auto">ПРОДОЛЖИТЬ</QButton>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer fixed bottom-0 left-0 right-0 h="40px xl:33px" border="t [#e7e7e7]">
            <div w="full xl:1024px" h-full mx-auto p="x-20px xl:0">
                <div mt="5px xl:0" w-full h-full grid grid-cols="[1fr_1fr] xl:[2fr_1fr_1fr]"
                    grid-rows="[10px_10px] xl:[1fr]" gap="5px xl:0" text="xl:center" items-center>
                    <QLink col-span="2 xl:1" text="10px xl:12px">ИП Иванов Иван Иванович ИНН 123 ОГРНИП 123</QLink>
                    <QLink active text="10px xl:12px">Договор публичной оферты</QLink>
                    <QLink active text="10px xl:12px">Политика исп. данных</QLink>
                </div>
            </div>
        </footer>
    </NuxtLayout>
</template>

<style scoped>
</style>