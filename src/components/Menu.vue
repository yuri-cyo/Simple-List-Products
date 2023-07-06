<template>
	<div>
		<nav class="nav">
			<div class="nav__wrapper">
				<!-- <span class="icon-menu nav__icon-menu"></span> -->
				<div class="nav__logo">
					<h1 class="nav__logo-title title"><span class="icon-logo nav__icon-logo"></span>Products</h1>
				</div>
				<span class="nav__menu-title title">Меню</span>
				<ul class="menu">
					<li>
						<router-link class="router-link" to="/prod">
						<span class="icon-product menu__icons-list"></span>
						<span class="menu__list-titles">{{ productName }}</span>
						</router-link>
					</li>
					<li>
						<router-link class="router-link" to="/doc">
							<span class="icon-doc menu__icons-list"></span>
							<span class="menu__list-titles">{{ docName }}</span>
						</router-link>
					</li>
					<li>
						<router-link class="router-link" to="/set">
							<span class="icon-set menu__icons-list"></span>
							<span class="menu__list-titles">{{ setName }}</span>
						</router-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script setup lang="js">
import { ref, reactive, defineComponent } from "vue";

const productName = ref('Товари')
const docName = reactive('Документи')
const setName = reactive('Опції')




</script>


<style lang="scss" scoped>

$t-transition-menu: .3s;
.nav {
	width: rem(300);
	height: 100%;
	background-color: $bgMenu;
	border-right: 1px solid $strokeMenu;
	font-size: $fs-menu;
	&__wrapper {
		top: 0px;
		left: 50%;
		position: sticky;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: $margin-primary;
		// background-color: #232;
	}

	&__icon-logo {
		color: $primaryColor;
		padding-right: rem(5);
		font-size: rem(45);
	}
	
	&__logo-title {
		display: flex;
		align-items: center;
		// margin-top: calc($margin-primary + rem(28));
		padding-bottom: $margin-primary;
		border-bottom: solid 2px $strokeMenu;
	}

	&__icon-menu {
		position: fixed;

		top: $margin-primary;
		left: $margin-primary;
		color: $primaryColor;
		font-size: rem(28);

		cursor: pointer;
	}

	&__menu-title {
		padding: rem(9.5) 0;
	}
}

.menu {
	font-size: $fs-default;
	.menu__icons-list {
		padding-right: rem(10);
		width: rem(30);
	}
		li .router-link {
			display: block;
			color: $primaryColor;
			align-items: center;
			font-size: rem(24);
			padding: calc((43px - 24px) / 2) rem(8);
			// margin: calc((43px - 24px) / 2) rem(8);
			margin-left: rem(-8);
			margin-right: rem(-8);
			cursor: pointer;
			border-radius: rem(13);
			transition: all $t-transition-menu ease 0s;
			

			.menu__list-titles {
				color: black;
				transition: all $t-transition-menu ease 0s;
			}

			&:hover {
				// background: $menu-hover;
				background-color: $primaryColor;
				color: $bgMenu;
				transition: all $t-transition-menu ease 0s;
				.menu__list-titles {
					color: $menu-hover-text;
					transition: all $t-transition-menu ease 0s;
				}

			}
			// border: solid rem(1) #262626;
			// margin: 0 rem(10) rem(10) rem(10);
			// border-radius: rem(10);
			// font-size: rem(24);
		}

		// &__list-titles {
		// 	color: black;
		// }
	}

</style>