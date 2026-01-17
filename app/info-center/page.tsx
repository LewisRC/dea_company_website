import { Metadata } from "next"
import { InfoCenterPageTemplate } from "@/components/templates/info-center-template"

export const metadata: Metadata = {
  title: "成功案例 - 德视安科技",
  description: "成都德视安科技有限公司成功案例展示，涵盖智慧医院、智慧康养、智慧建筑、智慧社区四大领域",
  keywords: "德视安,成功案例,智慧医院,智慧康养,智慧建筑,智慧社区,数字对讲系统",
}

export default function InfoCenterPage() {
  return <InfoCenterPageTemplate />;
}