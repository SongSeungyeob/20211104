package co.yedam.member;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class GetMemberServlet
 */
@WebServlet({ "/GetMemberServlet", "/get_member" })
public class GetMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetMemberServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		response.getWriter().append("Served at: ").append(request.getContextPath());
//		response.setContentType("text/html; charset=UTF-8");
		response.setContentType("text/xml; charset=UTF-8");
		PrintWriter out = response.getWriter();
		
		MemDAO dao = new MemDAO();
		List<MemberVO> list = dao.getMemberList();
//		out.println("<ul>");
		out.println("<record>");
		out.print("<title>Hello 송승엽 입니다.</title>");
		for(MemberVO member : list) {
//			out.println("<li>" + member.getUserId() + " , " + member.getUserName() + " , "  + member.getBirthDate() + " , "
//					     + member.getGender() + "</li>");
			out.println("<row>" + "<id>" + member.getUserId() + "</id>"
			             + "<name>" + member.getUserName() + "</name>"
			             + "<birth>" + member.getBirthDate() + "</birth>"
			             + "<gender>" + member.getGender() + "</gender>" 
			             + "</row>");
		}
		out.println("</record>");
//		out.println("</ul>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
