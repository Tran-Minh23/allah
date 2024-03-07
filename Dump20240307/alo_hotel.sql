-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: alo
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel` (
  `hotel_id` int NOT NULL,
  `address` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `bg_image` text NOT NULL,
  `images` text NOT NULL,
  PRIMARY KEY (`hotel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (1,'246B Hàng Bông, Cửa  Nam, Quận Hoàn Kiếm, Hà Nội, Việt Nam','Millennium Hanoi Hotel','[\"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20016481-0fc9c242de2ca7e8fcae8aa7bb1dd3d8.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256\"]','[\"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20016481-0f4c36c4bbd1ac61ecfb4c2ac114fe8d.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20016481-56ec51ddeca24ec5aaad28f604dc729c.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/67741407-4032x3024-FIT_AND_TRIM-9dd4c41d6730d4dbaed4462e2cb889d9.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\"]'),(2,'78 Thợ Nhuộm, Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội, Việt Nam','Muong Thanh Hanoi Centre Hotel','[\"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10025235-aef700914b1430ff8defadafeebd93d2.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256\"]','[\"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10025235-800x530-FIT_AND_TRIM-ae6393eae08683a0b86f0bf4b1e94736.png?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10025235-800x425-FIT_AND_TRIM-18acd75d111af87fe7e76fac39015fa0.png?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10025235-f789cf0d84d65b26832486cd0ea1212b.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\"]'),(3,'56 - 66 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam','Khách sạn Palace Saigon','[\"https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10022505-9d47b07d40edadf7857af2b9f8b0835e.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256\"]','[\"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10022505-c874c9ac10cd201749fb328a7650464b.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10022505-9ae9cdf00142edff4b5b1be46081734d.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10022505-07a65f019b616250f64e64342857a30d.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\"]'),(4,'54/34 Bạch Đằng, Phường 2, Quận Tân Bình, Thành phố Hồ Chí Minh, Việt Nam','My Villa Airport Hotel','[\"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20006877-77ffc118e75d3038adace35a14d63f20.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256\"]','[\"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20006877-02f4b195306ed3b53f139922ba8c2946.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20006877-10f1b04eb5aa852ca3232f6d0c33ef29.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20006877-f71b8c10ca8fbb24d1c862868af38e41.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\"]'),(5,'135/4 Nguyễn Cửu Vân, Phường 17, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam','Cozrum Homes - Premier Residence','[\"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/67765696-2be837f631488bd5136aa05970753402.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256\"]','[\"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/67765696-ac62691de49c6eeb316b61af02fdf122.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/67765696-573992064c782a4fdab4c0d392198308.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20026813-6bec202d167e543f75682d6aa139c909.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\"]'),(6,'333 Soi Phahonyathin 34, Senanikhom, Sena Nikhom, Chatuchak, Bangkok, Thailand','Livotel Hotel Kaset Nawamin Bangkok','[\"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10015739-4a3e907c25e245a1f00f3bf8941605d6.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256\"]','[\"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10015739-06fe2b536be517d6d20cc698a160c5d0.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10015739-c60951b9d3b414accbb6cc5e554d2107.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10015739-0b6962c653492702ec515f6c4695005f.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\"]'),(7,'222 Soi Ratchaprarop 3, Ratchaprarop Rd., Ratchathewi, Pratunam, Ratchathewi, Bangkok, Thailand','BAIYOKE SKY HOTEL','[\"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10008502-c2eeeec6a9b9c19c7850059422160ae8.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256\"]','[\"https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10008502-86feeb67a782566a44f96607dcf72f8a.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10008502-f61e1d6c14029939bef405e65f9707f3.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10008502-337107a8ed5cecca4b7c6a2a2d734813.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\"]'),(8,'296 Phayathai Road, Petchaburi, Ratchathewi, Bangkok, Thailand','Asia Hotel Bangkok','[\"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10014998-78344d767d67b8f41e345ab943141368.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256\"]','[\"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10014998-1280x850-FIT_AND_TRIM-35641c3a06c03062c0e83343dd745958.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10014998-8110bf80456da351c1b31ad8c4a32242.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10014998-1280x850-FIT_AND_TRIM-8887dcac7f2487217b049b74a2bbebdc.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\"]'),(9,'500 Jalan Sultan Road , Bugis, Singapore','Hotel Boss','[\"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10007851-1025x1536-FIT_AND_TRIM-96a5880255c375ae2707b93f5711a2e5.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256\"]','[\"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10007851-2048x1366-FIT_AND_TRIM-6db33b5e73c55a8581b6d8230e522169.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10007851-1979x1536-FIT_AND_TRIM-df4e4c4ff9f993ae2daf25f9f0c9940c.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10007851-2048x1367-FIT_AND_TRIM-1643618f959642be4f8c44d037ed6901.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\"]'),(10,'15 Merbau Road, Clarke Quay, Singapore','Robertson Quay Hotel','[\"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011338-1ebb088910e6d12402f063e4d5465f68.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256\"]','[\"https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011338-2048x1362-FIT_AND_TRIM-d796ff6a82799967a7a5f7bbfc420518.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011338-2048x1356-FIT_AND_TRIM-eed7a0b6b86bd8e2342b0e11e41ce907.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\", \"https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011338-2048x1352-FIT_AND_TRIM-750ca5aac1f45a71f9f3e48d49f052e3.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640\"]');
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-07 12:08:29
