<template>
    <div>
        <Html
        :lang="'eng-US'">
            <Title>Top 50 restaurants</Title>
            <Meta 
            name="description"
            content="This is a description of the page"/>
            <Link
            rel="preload"
            href="https://cdn-icons-png.flaticon.com/512/3305/3305803.png"
            as="script" />
        </Html>

        <NuxtLayout name="restaurantad">
            <div class="container">
                <RestaurantTable />
            </div>
        </NuxtLayout>
    </div>
</template>