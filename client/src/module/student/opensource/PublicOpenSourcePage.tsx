
i
m
p
o
r
t
 
{
 
N
a
v
b
a
r
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
N
a
v
b
a
r
"
;


i
m
p
o
r
t
 
{
 
F
o
o
t
e
r
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
F
o
o
t
e
r
"
;


i
m
p
o
r
t
 
{
 
S
E
O
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
S
E
O
"
;


i
m
p
o
r
t
 
{
 
c
a
n
o
n
i
c
a
l
U
r
l
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
s
e
o
.
u
t
i
l
s
"
;


i
m
p
o
r
t
 
O
p
e
n
S
o
u
r
c
e
L
a
n
d
i
n
g
P
a
g
e
 
f
r
o
m
 
"
.
/
O
p
e
n
S
o
u
r
c
e
L
a
n
d
i
n
g
P
a
g
e
"
;


i
m
p
o
r
t
 
{
 
O
s
s
C
o
n
t
r
i
b
u
t
i
o
n
H
e
a
t
m
a
p
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
O
s
s
C
o
n
t
r
i
b
u
t
i
o
n
H
e
a
t
m
a
p
"
;


i
m
p
o
r
t
 
{
 
u
s
e
A
u
t
h
S
t
o
r
e
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
a
u
t
h
.
s
t
o
r
e
"
;




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
P
u
b
l
i
c
O
p
e
n
S
o
u
r
c
e
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
{
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
,
 
u
s
e
r
 
}
 
=
 
u
s
e
A
u
t
h
S
t
o
r
e
(
)
;


 
 
c
o
n
s
t
 
i
s
S
t
u
d
e
n
t
 
=
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
 
&
&
 
u
s
e
r
?
.
r
o
l
e
 
=
=
=
 
"
S
T
U
D
E
N
T
"
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
h
-
s
c
r
e
e
n
 
b
g
-
[
#
f
a
f
a
f
a
]
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
5
0
"
>


 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
O
p
e
n
 
S
o
u
r
c
e
 
D
i
s
c
o
v
e
r
y
"


 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
=
"
D
i
s
c
o
v
e
r
 
b
e
g
i
n
n
e
r
-
f
r
i
e
n
d
l
y
 
o
p
e
n
-
s
o
u
r
c
e
 
r
e
p
o
s
i
t
o
r
i
e
s
,
 
e
x
p
l
o
r
e
 
G
S
o
C
 
o
r
g
a
n
i
z
a
t
i
o
n
s
,
 
t
r
a
c
k
 
p
r
o
g
r
a
m
s
 
l
i
k
e
 
L
F
X
,
 
O
u
t
r
e
a
c
h
y
,
 
a
n
d
 
H
a
c
k
t
o
b
e
r
f
e
s
t
,
 
a
n
d
 
m
a
k
e
 
y
o
u
r
 
f
i
r
s
t
 
c
o
n
t
r
i
b
u
t
i
o
n
 
-
 
a
l
l
 
f
o
r
 
f
r
e
e
.
"


 
 
 
 
 
 
 
 
k
e
y
w
o
r
d
s
=
"
o
p
e
n
 
s
o
u
r
c
e
,
 
G
S
o
C
,
 
G
o
o
g
l
e
 
S
u
m
m
e
r
 
o
f
 
C
o
d
e
,
 
L
F
X
 
m
e
n
t
o
r
s
h
i
p
,
 
O
u
t
r
e
a
c
h
y
,
 
M
L
H
 
f
e
l
l
o
w
s
h
i
p
,
 
H
a
c
k
t
o
b
e
r
f
e
s
t
,
 
o
p
e
n
 
s
o
u
r
c
e
 
p
r
o
g
r
a
m
s
,
 
b
e
g
i
n
n
e
r
 
o
p
e
n
 
s
o
u
r
c
e
,
 
f
i
r
s
t
 
p
u
l
l
 
r
e
q
u
e
s
t
,
 
g
o
o
d
 
f
i
r
s
t
 
i
s
s
u
e
s
"


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
(
"
/
o
p
e
n
s
o
u
r
c
e
"
)
}


 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
N
a
v
b
a
r
 
/
>


 
 
 
 
 
 


 
 
 
 
 
 
{
i
s
S
t
u
d
e
n
t
 
&
&
 
(


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
t
-
2
4
 
p
b
-
8
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
6
x
l
 
m
x
-
a
u
t
o
 
p
x
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
l
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
m
b
-
4
"
>
Y
o
u
r
 
O
p
e
n
 
S
o
u
r
c
e
 
A
c
t
i
v
i
t
y
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
<
O
s
s
C
o
n
t
r
i
b
u
t
i
o
n
H
e
a
t
m
a
p
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
<
O
p
e
n
S
o
u
r
c
e
L
a
n
d
i
n
g
P
a
g
e
 
/
>


 
 
 
 
 
 
<
F
o
o
t
e
r
 
/
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


