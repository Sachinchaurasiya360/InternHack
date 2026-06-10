
c
o
n
s
t
 
W
O
R
D
S
_
P
E
R
_
M
I
N
U
T
E
 
=
 
2
0
0
;




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
s
t
r
i
p
H
t
m
l
(


 
 
h
t
m
l
:
 
s
t
r
i
n
g


)
:
 
s
t
r
i
n
g
 
{


 
 
r
e
t
u
r
n
 
h
t
m
l
.
r
e
p
l
a
c
e
(
/
<
[
^
>
]
*
>
/
g
,
 
"
"
)
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
c
a
l
c
u
l
a
t
e
R
e
a
d
i
n
g
T
i
m
e
(


 
 
c
o
n
t
e
n
t
:
 
s
t
r
i
n
g


)
:
 
n
u
m
b
e
r
 
{


 
 
i
f
 
(
!
c
o
n
t
e
n
t
)
 
r
e
t
u
r
n
 
1
;




 
 
c
o
n
s
t
 
c
l
e
a
n
T
e
x
t
 
=
 
s
t
r
i
p
H
t
m
l
(
c
o
n
t
e
n
t
)
;




 
 
c
o
n
s
t
 
w
o
r
d
s
 
=
 
c
l
e
a
n
T
e
x
t


 
 
 
 
.
t
r
i
m
(
)


 
 
 
 
.
s
p
l
i
t
(
/
\
s
+
/
)


 
 
 
 
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
;




 
 
r
e
t
u
r
n
 
M
a
t
h
.
m
a
x
(


 
 
 
 
1
,


 
 
 
 
M
a
t
h
.
c
e
i
l
(
w
o
r
d
s
.
l
e
n
g
t
h
 
/
 
W
O
R
D
S
_
P
E
R
_
M
I
N
U
T
E
)


 
 
)
;


}
