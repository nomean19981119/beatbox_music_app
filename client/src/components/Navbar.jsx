import React from "react";
import { BiMusic } from "react-icons/bi";
import { AiFillHeart, AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { BsHeadphones } from "react-icons/bs";
import { HiOutlineUserCircle, HiViewGrid } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slices/userSlice";
import { resetPlayer } from "../redux/slices/playerSlice";

const Navbar = () => {
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(resetPlayer());
		dispatch(logoutUser());
		navigate("/auth/login");
	};
	return (
		<Box
			position="fixed"
			top={0}
			left={0}
			zIndex={30}
			minW={{ base: "full", md: "12rem", lg: "16rem" }}
			minH="100vh"
			borderRight="1px"
			borderRightColor="zinc.600"
			bg="zinc.900">
			<Flex direction="column" minH="100vh" p={4}>
				<Flex align="center" gap={4}>
					<BiMusic className="text-accent" size={30} />
					<Heading as="h1" fontWeight="semibold" fontSize="2xl">
						BeatBox
					</Heading>
				</Flex>
				<Flex direction="column" gap={2} mt={12}>
					<NavLink to="/home">
						{({ isActive, isPending }) => (
							<Button
								bg={isActive ? "accent.main" : "transparent"}
								_hover={
									isActive ? { opacity: 0.8 } : { bg: "accent.transparent" }
								}
								rounded="base"
								display="inline-flex"
								alignItems="center"
								justifyContent="flex-start"
								gap={6}
								py={6}
								px={4}
								w="full">
								<AiFillHome size={20} />
								<span>Home</span>
							</Button>
						)}
					</NavLink>
					<NavLink to="/library">
						{({ isActive, isPending }) => (
							<Button
								bg={isActive ? "accent.main" : "transparent"}
								_hover={
									isActive ? { opacity: 0.8 } : { bg: "accent.transparent" }
								}
								rounded="base"
								display="inline-flex"
								alignItems="center"
								justifyContent="flex-start"
								gap={6}
								w="full"
								py={6}
								px={4}>
								<HiViewGrid size={20} />
								<span>Browse</span>
							</Button>
						)}
					</NavLink>
					<NavLink to="/playlists">
						{({ isActive, isPending }) => (
							<Button
								bg={isActive ? "accent.main" : "transparent"}
								_hover={
									isActive ? { opacity: 0.8 } : { bg: "accent.transparent" }
								}
								rounded="base"
								display="inline-flex"
								alignItems="center"
								justifyContent="flex-start"
								gap={6}
								w="full"
								py={6}
								px={4}>
								<BsHeadphones size={20} />
								<span>Playlists</span>
							</Button>
						)}
					</NavLink>
					<Button
						bg="transparent"
						_hover={{ bg: "accent.transparent" }}
						rounded="base"
						display="inline-flex"
						alignItems="center"
						justifyContent="flex-start"
						gap={6}
						w="full"
						py={6}
						px={4}>
						<AiFillHeart size={20} />
						<span>Favorites</span>
					</Button>
				</Flex>
				<Divider bg="zinc.500" border="0" mt={12} h="1px" mb={4} />
				<div>
					{user ? (
						<Box p={3}>
							<Flex align="center" gap={4} color="accent.light">
								<HiOutlineUserCircle size={20} color="inherit" />
								<Text color="inherit" fontSize="sm">
									{user?.username}
								</Text>
							</Flex>
							<Button
								onClick={handleLogout}
								mt={8}
								variant="unstyled"
								display="inline-flex"
								alignItems="center"
								fontWeight={400}
								gap={3}>
								{" "}
								<AiOutlineLogout size={20} /> Logout
							</Button>
						</Box>
					) : (
						<Link to="/auth/login">
							<Button
								variant="unstyled"
								rounded="base"
								w="full"
								border="1px"
								borderColor="zinc.600"
								fontSize="sm"
								py={2}
								px={5}>
								Login
							</Button>
						</Link>
					)}
				</div>
			</Flex>
		</Box>
	);
};

export default Navbar;
