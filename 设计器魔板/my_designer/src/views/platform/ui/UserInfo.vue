<template>
  <div class="user-info-profile">
    <div class="user-info-profile-photo">
      <img
        v-if="info.profileImg"
        class="yn-user-profile-image"
        :src="info.profileImg"
        alt="default"
      />
      <!-- <img
        v-if="!info.profileImg"
        src="../../assets/platform/images/user_default_1.svg"
        alt="default"
      /> -->
    </div>
    <div class="user-info-profile-display-name">
      <span>{{ info.userDisplayName }}</span>
    </div>
    <div class="user-info-profile-display-title">
      <span>{{ info.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  data: function() {
    return {};
  }
};
</script>

<style>
.user-info-profile {
  padding: 16px 0 16px 0;
}

.user-info-profile-display-name {
  color: aliceblue;
  text-align: center;
  font-size: 1rem;
  margin-top: 8px;
}

.theme-light .user-info-profile-display-name {
  color: #595959;
}

.user-info-profile-display-title {
  color: aliceblue;
  text-align: center;
  font-size: 0.7rem;
  margin-top: 8px;
}

.theme-light .user-info-profile-display-title {
  color: #595959;
}

.user-info-profile-photo {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: auto;
}

.yn-user-profile-image {
  width: 61px;
  height: 61px;
  border-radius: 50%;
}
</style>
