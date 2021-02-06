<template>
  <div>
    <Header />
    <CardItem />
  </div>
</template>

<script>
import Header from "@/components/Header";
import CardItem from "@/components/CardItem";
export default {
  name: "MainLayout",
  components: {
    Header,
    CardItem,
  },
};
</script>

<style lang="scss" scoped></style>
