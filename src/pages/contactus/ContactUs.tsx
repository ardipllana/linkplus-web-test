// import React from "react";
// import type { CSSProperties } from "react";
// import {
//   Layout,
//   Row,
//   Col,
//   Typography,
//   Space,
//   Card,
//   Form,
//   Input,
//   Button,
//   message,
//   theme,
//   Divider,
// } from "antd";
// import {
//   EnvironmentOutlined,
//   CustomerServiceOutlined,
//   MailOutlined,
//   ExportOutlined,
// } from "@ant-design/icons";

// // Ant Design version of the Contact page (React + TypeScript)
// // Matches the provided screenshots and keeps a RED hero block behind the title.

// const { Header, Content } = Layout;
// const { Title, Text } = Typography;

// const heroStyle: CSSProperties = {
//   height: 340,
//   background: "#e11d48", // red space as requested
//   position: "relative",
// };

// const heroCenter: CSSProperties = {
//   position: "absolute",
//   inset: 0,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   textAlign: "center",
// };

// export default function ContactUsPageAntd(): JSX.Element {
//   const [form] = Form.useForm();
//   const { token } = theme.useToken();

//   function onFinish() {
//     message.success("Thanks! Your request has been submitted.");
//     form.resetFields();
//   }

//   return (
//     <Layout style={{ background: "#fff" }}>
//       {/* HERO */}
//       <Header style={{ padding: 0, lineHeight: 0, background: "transparent" }}>
//         <div style={heroStyle}>
//           <div style={heroCenter}>
//             <div>
//               <Text style={{ color: "#fff", opacity: 0.9, letterSpacing: 2 }}>
//                 Home <span style={{ margin: "0 6px" }}>/</span> Contact us
//               </Text>
//               <Title style={{ color: "#fff", marginTop: 8, fontWeight: 800 }}>
//                 Contact us
//               </Title>
//             </div>
//           </div>
//         </div>
//       </Header>

//       {/* MAIN */}
//       <Content style={{ marginTop: -40, paddingBottom: 48 }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
//           <Row gutter={[32, 32]} align="top">
//             {/* LEFT COLUMN */}
//             <Col xs={24} lg={12} style={{ paddingTop: 80 }}>
//               <Space size={8} align="center" style={{ textTransform: "uppercase", fontWeight: 700, color: token.colorPrimary }}>
//                 <span
//                   style={{
//                     width: 6,
//                     height: 6,
//                     borderRadius: 6,
//                     background: token.colorPrimary,
//                     display: "inline-block",
//                   }}
//                 />
//                 <Text style={{ color: token.colorPrimary }}>Our contacts</Text>
//               </Space>

//               <Title level={1} style={{ marginTop: 12, fontWeight: 800, lineHeight: 1.15 }}>
//                 Get Our Contacts
//                 <br /> From Here
//               </Title>

//               <Text style={{ display: "block", marginTop: 16, maxWidth: 560, color: token.colorTextSecondary }}>
//                 Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an
//                 email or fill out the contact form and we’ll get back to you.
//               </Text>

//               <Space direction="vertical" size={24} style={{ marginTop: 32 }}>
//                 <IconRow
//                   icon={<EnvironmentOutlined />}
//                   title="Location"
//                   subtitle="8814 Bayberry Ave. Jonesborough, TN 37659"
//                   token={token}
//                 />
//                 <IconRow
//                   icon={<CustomerServiceOutlined />}
//                   title="Support"
//                   subtitle="+4800 45 678 900"
//                   token={token}
//                 />
//                 <IconRow
//                   icon={<MailOutlined />}
//                   title="Email us"
//                   subtitle="contact@example.com"
//                   token={token}
//                 />
//               </Space>
//             </Col>

//             {/* RIGHT COLUMN (FORM) */}
//             <Col xs={24} lg={12} style={{ paddingTop: 80 }}>
//               <Card
//                 style={{
//                   borderRadius: 24,
//                   boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
//                   border: "1px solid " + token.colorBorderSecondary,
//                 }}
//                 bodyStyle={{ padding: 24 }}
//               >
//                 <Title level={3} style={{ margin: 0 }}>Ready to Get Started?</Title>
//                 <Text type="secondary" style={{ display: "block", marginTop: 8 }}>
//                   Your email address will not be published. Required fields are marked <b>*</b>
//                 </Text>

//                 <Divider style={{ margin: "16px 0 0 0" }} />

//                 <Form
//                   form={form}
//                   layout="vertical"
//                   onFinish={onFinish}
//                   style={{ marginTop: 16 }}
//                   requiredMark="optional"
//                 >
//                   <Row gutter={16}>
//                     <Col xs={24} sm={12}>
//                       <Form.Item name="firstName" rules={[{ required: true }]}>
//                         <Input size="large" placeholder="First Name*" />
//                       </Form.Item>
//                     </Col>
//                     <Col xs={24} sm={12}>
//                       <Form.Item name="lastName" rules={[{ required: true }]}>
//                         <Input size="large" placeholder="Last Name*" />
//                       </Form.Item>
//                     </Col>
//                   </Row>

//                   <Row gutter={16}>
//                     <Col xs={24} sm={12}>
//                       <Form.Item name="phone" rules={[{ required: true }]}>
//                         <Input size="large" placeholder="Phone Number*" />
//                       </Form.Item>
//                     </Col>
//                     <Col xs={24} sm={12}>
//                       <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
//                         <Input size="large" placeholder="Your email*" />
//                       </Form.Item>
//                     </Col>
//                   </Row>

//                   <Form.Item name="message">
//                     <Input.TextArea
//                       rows={4}
//                       placeholder="How Can We Assist Your Aesthetic Needs..."
//                       style={{ resize: "vertical" }}
//                     />
//                   </Form.Item>

//                   <Button
//                     htmlType="submit"
//                     size="large"
//                     type="primary"
//                     style={{
//                       border: "none",
//                       borderRadius: 12,
//                       paddingInline: 20,
//                       background: "linear-gradient(90deg,#d946ef,#8b5cf6,#6366f1)",
//                     }}
//                   >
//                     SUBMIT REQUEST <ExportOutlined style={{ marginLeft: 8 }} />
//                   </Button>
//                 </Form>
//               </Card>
//             </Col>
//           </Row>

//           {/* MAP */}
//           <div style={{ marginTop: 48 }}>
//             <iframe
//               title="New York map"
//               src="https://www.google.com/maps?q=New%20York&output=embed"
//               style={{ width: "100%", height: 520, border: 0 }}
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>
//       </Content>
//     </Layout>
//   );
// }

// function IconRow({
//   icon,
//   title,
//   subtitle,
//   token,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   subtitle: string;
//   token: any;
// }) {
//   return (
//     <Space align="start" size={16}>
//       <span
//         style={{
//           display: "inline-flex",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: 10,
//           borderRadius: 16,
//           background: token.colorFillTertiary,
//           color: token.colorPrimary,
//         }}
//       >
//         {icon}
//       </span>
//       <div>
//         <div style={{ fontWeight: 600 }}>{title}</div>
//         <Text type="secondary">{subtitle}</Text>
//       </div>
//     </Space>
//   );
// }
