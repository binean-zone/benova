# ☁️ Ingenium Trên Nền Tảng Đám Mây

> **"Hành trình vạn dặm bắt đầu từ một bước — và Sun Life Vietnam đã chứng minh rằng bước đầu tiên không phải là bước khó nhất."**

---

## Câu Chuyện Thực Tế: Sun Life Vietnam

**9 tháng. Một team. Từ zero đến production cloud.**

Sun Life Vietnam đã hoàn thành hành trình chuyển đổi Ingenium lên AWS một cách thành công. Đây không phải dự án thí nghiệm — đây là hệ thống core insurance đang phục vụ hàng triệu khách hàng mỗi ngày.

### Những Gì Đã Được Thực Hiện

| Hạng mục | Chi tiết |
|----------|---------|
| **Infrastructure provisioning** | EC2 instances tối ưu cho Ingenium workload |
| **Ingenium migration** | Chuyển toàn bộ data, cấu hình, và customization |
| **Network architecture** | VPC, security groups, private subnets cho DB2 |
| **COBOL compilation pipeline** | CI/CD cho Ingenium codebase |
| **Credential management** | Nexus Vault tích hợp AWS Secrets Manager |
| **Monitoring & alerting** | CloudWatch dashboards cho Ingenium metrics |
| **Backup strategy** | Automated snapshots với retention policy |
| **DR planning** | Multi-AZ deployment cho high availability |

---

## 🌩️ Tại Sao Chuyển Lên Cloud?

Đây là 6 lý do mà ban lãnh đạo Sun Life Vietnam đã dùng để thuyết phục hội đồng quản trị:

### 1. 💰 Chi Phí Có Thể Dự Đoán
Thay vì đầu tư lớn vào phần cứng (CapEx), chuyển sang mô hình trả theo sử dụng (OpEx). Chi phí infrastructure trở thành biến số tương quan với kinh doanh, không phải gánh nặng cố định.

### 2. 🚀 Tốc Độ Mở Rộng
Khi mùa tái tục hợp đồng đến, server có thể scale up trong vài phút — không phải vài tuần mua phần cứng. Sau đó scale down khi hết peak, tiết kiệm chi phí.

### 3. 🛡️ Bảo Mật Cấp Doanh Nghiệp
AWS infrastructure đã đạt hàng chục chứng chỉ bảo mật (ISO 27001, SOC 2, PCI DSS). Đội ngũ IT tập trung vào bảo mật nghiệp vụ thay vì vá lỗi vật lý.

### 4. 🔄 Phục Hồi Thảm Họa
Multi-AZ deployment có nghĩa là server hỏng ở một datacenter không ảnh hưởng đến hệ thống. RTO từ vài giờ xuống còn vài phút.

### 5. 🛠️ Tập Trung Vào Kinh Doanh
Không còn đội ngũ dành thời gian cho hardware maintenance, datacenter, và server room management. Tất cả nhân lực IT chuyển sang phát triển tính năng và phục vụ kinh doanh.

### 6. 🌏 Cơ Sở Cho Digital Transformation
Cloud là nền tảng cho bước tiếp theo — API economy, digital distribution, mobile apps. Không có cloud, không có digital future.

---

## 🏗️ Kiến Trúc Cloud

```
Internet
    │
    ▼
┌───────────────────────────────────────────────────────┐
│                    AWS Cloud                          │
│                                                       │
│  ┌──────────────────────────────────────────────────┐ │
│  │                Public Subnet                     │ │
│  │  ┌──────────────┐    ┌────────────────────────┐  │ │
│  │  │   ALB / WAF  │    │   Bastion Host (ops)   │  │ │
│  │  └──────┬───────┘    └────────────────────────┘  │ │
│  └─────────┼────────────────────────────────────────┘ │
│            │                                          │
│  ┌─────────▼────────────────────────────────────────┐ │
│  │               Private Subnet                     │ │
│  │  ┌───────────────────┐  ┌───────────────────┐    │ │
│  │  │  App Server (EC2) │  │  isman Server     │    │ │
│  │  │  Ingenium + COBOL │  │  (Nexus)          │    │ │
│  │  └──────────┬────────┘  └──────────────────┘    │ │
│  │             │                                    │ │
│  │  ┌──────────▼────────────────────────────────┐  │ │
│  │  │          DB Subnet                         │  │ │
│  │  │  ┌──────────────────┐                     │  │ │
│  │  │  │  DB2 (RDS/EC2)   │                     │  │ │
│  │  │  └──────────────────┘                     │  │ │
│  │  └────────────────────────────────────────────┘  │ │
│  └──────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────┘
```

---

## 💡 Lợi Ích Sau Khi Chuyển

Sau 12 tháng vận hành cloud, Sun Life Vietnam ghi nhận:

- **99.95% uptime** — vượt cam kết SLA với khách hàng
- **40% giảm** chi phí infrastructure so với on-premise
- **Thời gian deploy** từ 2 ngày xuống còn 2 giờ
- **Disaster recovery** từ "chưa có kế hoạch" thành "15 phút RTO"

---

## ⚠️ Lưu Ý Quan Trọng

Kinh nghiệm từ dự án Sun Life Vietnam đã định hình một số yêu cầu bắt buộc:

### Yêu Cầu Bắt Buộc
- **Linux là bắt buộc**: Ingenium trên cloud chạy trên Linux (Amazon Linux 2/Ubuntu). Windows server không được hỗ trợ cho môi trường production cloud.
- **VS Code là công cụ chuẩn**: Đội ngũ phát triển cần VS Code với Nexus Extension để kết nối đến cloud environment qua Remote SSH.

### Khuyến Nghị
- Bắt đầu với môi trường non-production (DEV/TEST) trước khi migrate PROD
- Chạy song song on-premise và cloud ít nhất 3 tháng trước khi cutover
- Đào tạo đội ngũ IT về AWS fundamentals song song với migration

---

## 🛣️ Lộ Trình 4 Giai Đoạn

| Giai đoạn | Thời gian | Nội dung |
|-----------|-----------|---------|
| **1. Foundation** | Tháng 1–2 | Thiết lập AWS account, VPC, IAM, baseline security |
| **2. Migration** | Tháng 3–5 | Migrate Ingenium DEV/TEST, test performance, optimize |
| **3. Production** | Tháng 6–8 | Migrate PROD với dual-run, validate toàn diện |
| **4. Optimization** | Tháng 9+ | Cost optimization, performance tuning, automation |

---

## 🤝 Phạm Vi Hỗ Trợ Của Nexus

Nexus cung cấp tooling và consulting cho:

- ✅ Kiến trúc cloud cho Ingenium workload
- ✅ Thiết lập Nexus toolchain trên cloud
- ✅ COBOL compilation pipeline trên CI/CD
- ✅ Monitoring và alerting cho Ingenium
- ✅ Security best practices và audit
- ✅ Training đội ngũ IT

---

## 📄 Tuyên Bố Pháp Lý

Tài liệu này được cung cấp cho mục đích tham khảo và tư vấn. Mọi thương hiệu thuộc sở hữu của chủ tương ứng. Dự án không liên kết với DXC Technology, Sun Life hay bất kỳ bên thứ ba nào được đề cập.
