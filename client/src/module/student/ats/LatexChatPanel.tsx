
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
S
t
a
t
e
,
 
u
s
e
R
e
f
,
 
u
s
e
E
f
f
e
c
t
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
L
i
n
k
 
}
 
f
r
o
m
 
"
r
e
a
c
t
-
r
o
u
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
 
m
o
t
i
o
n
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{


 
 
X
,


 
 
S
e
n
d
,


 
 
L
o
a
d
e
r
2
,


 
 
L
o
c
k
,


 
 
F
i
l
e
T
e
x
t
,


 
 
C
h
e
c
k
,


 
 
B
r
i
e
f
c
a
s
e
B
u
s
i
n
e
s
s
,


 
 
M
e
s
s
a
g
e
S
q
u
a
r
e
,


 
 
B
o
t
,


}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
a
p
i
 
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
x
i
o
s
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


i
m
p
o
r
t
 
t
y
p
e
 
{
 
L
a
t
e
x
C
h
a
t
M
e
s
s
a
g
e
,
 
L
a
t
e
x
C
h
a
t
R
e
s
p
o
n
s
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
t
y
p
e
s
"
;


i
m
p
o
r
t
 
{
 
B
u
t
t
o
n
 
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
u
i
/
b
u
t
t
o
n
"
;




i
n
t
e
r
f
a
c
e
 
L
a
t
e
x
C
h
a
t
P
a
n
e
l
P
r
o
p
s
 
{


 
 
c
o
d
e
:
 
s
t
r
i
n
g
;


 
 
o
n
A
p
p
l
y
C
o
d
e
:
 
(
n
e
w
C
o
d
e
:
 
s
t
r
i
n
g
)
 
=
>
 
v
o
i
d
;


 
 
o
n
C
l
o
s
e
:
 
(
)
 
=
>
 
v
o
i
d
;


}




/
*
*
 
R
e
n
d
e
r
 
b
a
s
i
c
 
m
a
r
k
d
o
w
n
:
 
*
*
b
o
l
d
*
*
 
a
n
d
 
b
u
l
l
e
t
 
l
i
n
e
s
 
(
-
 
i
t
e
m
)
 
*
/


f
u
n
c
t
i
o
n
 
r
e
n
d
e
r
M
a
r
k
d
o
w
n
(
t
e
x
t
:
 
s
t
r
i
n
g
)
 
{


 
 
c
o
n
s
t
 
l
i
n
e
s
 
=
 
t
e
x
t
.
s
p
l
i
t
(
"
\
n
"
)
;


 
 
c
o
n
s
t
 
e
l
e
m
e
n
t
s
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
[
]
 
=
 
[
]
;


 
 
l
e
t
 
b
u
l
l
e
t
B
u
f
f
e
r
:
 
s
t
r
i
n
g
[
]
 
=
 
[
]
;




 
 
c
o
n
s
t
 
f
l
u
s
h
B
u
l
l
e
t
s
 
=
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
b
u
l
l
e
t
B
u
f
f
e
r
.
l
e
n
g
t
h
 
=
=
=
 
0
)
 
r
e
t
u
r
n
;


 
 
 
 
e
l
e
m
e
n
t
s
.
p
u
s
h
(


 
 
 
 
 
 
<
u
l
 
k
e
y
=
{
`
u
l
-
$
{
e
l
e
m
e
n
t
s
.
l
e
n
g
t
h
}
`
}
 
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
l
i
s
t
-
d
i
s
c
 
l
i
s
t
-
i
n
s
i
d
e
 
s
p
a
c
e
-
y
-
0
.
5
 
m
y
-
1
"
>


 
 
 
 
 
 
 
 
{
b
u
l
l
e
t
B
u
f
f
e
r
.
m
a
p
(
(
b
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
l
i
 
k
e
y
=
{
i
}
>
{
f
o
r
m
a
t
I
n
l
i
n
e
(
b
)
}
<
/
l
i
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
<
/
u
l
>
,


 
 
 
 
)
;


 
 
 
 
b
u
l
l
e
t
B
u
f
f
e
r
 
=
 
[
]
;


 
 
}
;




 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
l
i
n
e
s
.
l
e
n
g
t
h
;
 
i
+
+
)
 
{


 
 
 
 
c
o
n
s
t
 
l
i
n
e
 
=
 
l
i
n
e
s
[
i
]
;


 
 
 
 
c
o
n
s
t
 
b
u
l
l
e
t
M
a
t
c
h
 
=
 
l
i
n
e
.
m
a
t
c
h
(
/
^
[
-
*
]
\
s
+
(
.
*
)
/
)
;


 
 
 
 
i
f
 
(
b
u
l
l
e
t
M
a
t
c
h
)
 
{


 
 
 
 
 
 
b
u
l
l
e
t
B
u
f
f
e
r
.
p
u
s
h
(
b
u
l
l
e
t
M
a
t
c
h
[
1
]
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
f
l
u
s
h
B
u
l
l
e
t
s
(
)
;


 
 
 
 
 
 
i
f
 
(
l
i
n
e
.
t
r
i
m
(
)
 
=
=
=
 
"
"
)
 
{


 
 
 
 
 
 
 
 
e
l
e
m
e
n
t
s
.
p
u
s
h
(
<
b
r
 
k
e
y
=
{
`
b
r
-
$
{
i
}
`
}
 
/
>
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
e
l
e
m
e
n
t
s
.
p
u
s
h
(


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
k
e
y
=
{
`
p
-
$
{
i
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
o
r
m
a
t
I
n
l
i
n
e
(
l
i
n
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
i
 
<
 
l
i
n
e
s
.
l
e
n
g
t
h
 
-
 
1
 
&
&
 
!
l
i
n
e
s
[
i
 
+
 
1
]
?
.
m
a
t
c
h
(
/
^
[
-
*
]
\
s
+
/
)
 
?
 
"
\
n
"
 
:
 
"
"
}


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>
,


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
}


 
 
f
l
u
s
h
B
u
l
l
e
t
s
(
)
;


 
 
r
e
t
u
r
n
 
e
l
e
m
e
n
t
s
;


}




f
u
n
c
t
i
o
n
 
f
o
r
m
a
t
I
n
l
i
n
e
(
t
e
x
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
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
[
]
 
{


 
 
c
o
n
s
t
 
p
a
r
t
s
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
r
e
g
e
x
 
=
 
/
\
*
\
*
(
.
+
?
)
\
*
\
*
/
g
;


 
 
l
e
t
 
l
a
s
t
I
d
x
 
=
 
0
;


 
 
l
e
t
 
m
a
t
c
h
:
 
R
e
g
E
x
p
E
x
e
c
A
r
r
a
y
 
|
 
n
u
l
l
;


 
 
w
h
i
l
e
 
(
(
m
a
t
c
h
 
=
 
r
e
g
e
x
.
e
x
e
c
(
t
e
x
t
)
)
 
!
=
=
 
n
u
l
l
)
 
{


 
 
 
 
i
f
 
(
m
a
t
c
h
.
i
n
d
e
x
 
>
 
l
a
s
t
I
d
x
)
 
p
a
r
t
s
.
p
u
s
h
(
t
e
x
t
.
s
l
i
c
e
(
l
a
s
t
I
d
x
,
 
m
a
t
c
h
.
i
n
d
e
x
)
)
;


 
 
 
 
p
a
r
t
s
.
p
u
s
h
(


 
 
 
 
 
 
<
s
t
r
o
n
g
 
k
e
y
=
{
m
a
t
c
h
.
i
n
d
e
x
}
 
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
f
o
n
t
-
s
e
m
i
b
o
l
d
"
>


 
 
 
 
 
 
 
 
{
m
a
t
c
h
[
1
]
}


 
 
 
 
 
 
<
/
s
t
r
o
n
g
>
,


 
 
 
 
)
;


 
 
 
 
l
a
s
t
I
d
x
 
=
 
m
a
t
c
h
.
i
n
d
e
x
 
+
 
m
a
t
c
h
[
0
]
.
l
e
n
g
t
h
;


 
 
}


 
 
i
f
 
(
l
a
s
t
I
d
x
 
<
 
t
e
x
t
.
l
e
n
g
t
h
)
 
p
a
r
t
s
.
p
u
s
h
(
t
e
x
t
.
s
l
i
c
e
(
l
a
s
t
I
d
x
)
)
;


 
 
r
e
t
u
r
n
 
p
a
r
t
s
;


}




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
 
L
a
t
e
x
C
h
a
t
P
a
n
e
l
(
{
 
c
o
d
e
,
 
o
n
A
p
p
l
y
C
o
d
e
,
 
o
n
C
l
o
s
e
 
}
:
 
L
a
t
e
x
C
h
a
t
P
a
n
e
l
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
u
s
e
r
 
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
(
s
)
 
=
>
 
s
.
u
s
e
r
)
;


 
 
c
o
n
s
t
 
i
s
P
r
e
m
i
u
m
 
=


 
 
 
 
(
u
s
e
r
?
.
s
u
b
s
c
r
i
p
t
i
o
n
P
l
a
n
 
=
=
=
 
"
M
O
N
T
H
L
Y
"
 
|
|
 
u
s
e
r
?
.
s
u
b
s
c
r
i
p
t
i
o
n
P
l
a
n
 
=
=
=
 
"
Y
E
A
R
L
Y
"
)
 
&
&


 
 
 
 
u
s
e
r
?
.
s
u
b
s
c
r
i
p
t
i
o
n
S
t
a
t
u
s
 
=
=
=
 
"
A
C
T
I
V
E
"
;




 
 
c
o
n
s
t
 
[
m
e
s
s
a
g
e
s
,
 
s
e
t
M
e
s
s
a
g
e
s
]
 
=
 
u
s
e
S
t
a
t
e
<
L
a
t
e
x
C
h
a
t
M
e
s
s
a
g
e
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
i
n
p
u
t
,
 
s
e
t
I
n
p
u
t
]
 
=
 
u
s
e
S
t
a
t
e
(
"
"
)
;


 
 
c
o
n
s
t
 
[
l
o
a
d
i
n
g
,
 
s
e
t
L
o
a
d
i
n
g
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
j
d
M
o
d
e
,
 
s
e
t
J
d
M
o
d
e
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
j
o
b
D
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
,
 
s
e
t
J
o
b
D
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
]
 
=
 
u
s
e
S
t
a
t
e
(
"
"
)
;


 
 
c
o
n
s
t
 
[
a
p
p
l
i
e
d
I
d
x
,
 
s
e
t
A
p
p
l
i
e
d
I
d
x
]
 
=
 
u
s
e
S
t
a
t
e
<
n
u
m
b
e
r
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
s
c
r
o
l
l
R
e
f
 
=
 
u
s
e
R
e
f
<
H
T
M
L
D
i
v
E
l
e
m
e
n
t
>
(
n
u
l
l
)
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
s
c
r
o
l
l
R
e
f
.
c
u
r
r
e
n
t
?
.
s
c
r
o
l
l
T
o
(
{
 
t
o
p
:
 
s
c
r
o
l
l
R
e
f
.
c
u
r
r
e
n
t
.
s
c
r
o
l
l
H
e
i
g
h
t
,
 
b
e
h
a
v
i
o
r
:
 
"
s
m
o
o
t
h
"
 
}
)
;


 
 
}
,
 
[
m
e
s
s
a
g
e
s
]
)
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
S
e
n
d
 
=
 
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
m
s
g
 
=
 
i
n
p
u
t
.
t
r
i
m
(
)
;


 
 
 
 
i
f
 
(
!
m
s
g
 
|
|
 
l
o
a
d
i
n
g
)
 
r
e
t
u
r
n
;




 
 
 
 
c
o
n
s
t
 
u
s
e
r
M
s
g
:
 
L
a
t
e
x
C
h
a
t
M
e
s
s
a
g
e
 
=
 
{
 
r
o
l
e
:
 
"
u
s
e
r
"
,
 
c
o
n
t
e
n
t
:
 
m
s
g
 
}
;


 
 
 
 
s
e
t
M
e
s
s
a
g
e
s
(
(
p
r
e
v
)
 
=
>
 
[
.
.
.
p
r
e
v
,
 
u
s
e
r
M
s
g
]
)
;


 
 
 
 
s
e
t
I
n
p
u
t
(
"
"
)
;


 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
t
r
u
e
)
;




 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
h
i
s
t
o
r
y
 
=
 
m
e
s
s
a
g
e
s
.
s
l
i
c
e
(
-
1
0
)
.
m
a
p
(
(
m
)
 
=
>
 
(
{
 
r
o
l
e
:
 
m
.
r
o
l
e
,
 
c
o
n
t
e
n
t
:
 
m
.
c
o
n
t
e
n
t
 
}
)
)
;


 
 
 
 
 
 
c
o
n
s
t
 
{
 
d
a
t
a
 
}
 
=
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
<
L
a
t
e
x
C
h
a
t
R
e
s
p
o
n
s
e
>
(
"
/
a
t
s
/
l
a
t
e
x
-
c
h
a
t
"
,
 
{


 
 
 
 
 
 
 
 
l
a
t
e
x
C
o
d
e
:
 
c
o
d
e
,


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
m
s
g
,


 
 
 
 
 
 
 
 
h
i
s
t
o
r
y
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
s
e
t
M
e
s
s
a
g
e
s
(
(
p
r
e
v
)
 
=
>
 
[


 
 
 
 
 
 
 
 
.
.
.
p
r
e
v
,


 
 
 
 
 
 
 
 
{
 
r
o
l
e
:
 
"
a
s
s
i
s
t
a
n
t
"
,
 
c
o
n
t
e
n
t
:
 
d
a
t
a
.
r
e
p
l
y
,
 
u
p
d
a
t
e
d
L
a
t
e
x
:
 
d
a
t
a
.
u
p
d
a
t
e
d
L
a
t
e
x
 
}
,


 
 
 
 
 
 
]
)
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
m
e
s
s
a
g
e
 
=


 
 
 
 
 
 
 
 
e
r
r
 
&
&
 
t
y
p
e
o
f
 
e
r
r
 
=
=
=
 
"
o
b
j
e
c
t
"
 
&
&
 
"
r
e
s
p
o
n
s
e
"
 
i
n
 
e
r
r


 
 
 
 
 
 
 
 
 
 
?
 
(
(
e
r
r
 
a
s
 
{
 
r
e
s
p
o
n
s
e
?
:
 
{
 
d
a
t
a
?
:
 
{
 
m
e
s
s
a
g
e
?
:
 
s
t
r
i
n
g
 
}
 
}
 
}
)
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
?
.
m
e
s
s
a
g
e
 
?
?


 
 
 
 
 
 
 
 
 
 
 
 
"
S
o
m
e
t
h
i
n
g
 
w
e
n
t
 
w
r
o
n
g
"
)


 
 
 
 
 
 
 
 
 
 
:
 
"
S
o
m
e
t
h
i
n
g
 
w
e
n
t
 
w
r
o
n
g
"
;


 
 
 
 
 
 
s
e
t
M
e
s
s
a
g
e
s
(
(
p
r
e
v
)
 
=
>
 
[
.
.
.
p
r
e
v
,
 
{
 
r
o
l
e
:
 
"
a
s
s
i
s
t
a
n
t
"
,
 
c
o
n
t
e
n
t
:
 
m
e
s
s
a
g
e
 
}
]
)
;


 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
}


 
 
}
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
O
p
t
i
m
i
z
e
J
D
 
=
 
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
j
o
b
D
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
.
t
r
i
m
(
)
.
l
e
n
g
t
h
 
<
 
5
0
 
|
|
 
l
o
a
d
i
n
g
)
 
r
e
t
u
r
n
;




 
 
 
 
c
o
n
s
t
 
j
d
 
=
 
j
o
b
D
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
.
t
r
i
m
(
)
;


 
 
 
 
c
o
n
s
t
 
u
s
e
r
M
s
g
:
 
L
a
t
e
x
C
h
a
t
M
e
s
s
a
g
e
 
=
 
{


 
 
 
 
 
 
r
o
l
e
:
 
"
u
s
e
r
"
,


 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
`
O
p
t
i
m
i
z
e
 
m
y
 
r
e
s
u
m
e
 
f
o
r
 
t
h
i
s
 
j
o
b
:
\
n
\
n
$
{
j
d
.
s
l
i
c
e
(
0
,
 
2
0
0
)
}
.
.
.
`
,


 
 
 
 
}
;


 
 
 
 
s
e
t
M
e
s
s
a
g
e
s
(
(
p
r
e
v
)
 
=
>
 
[
.
.
.
p
r
e
v
,
 
u
s
e
r
M
s
g
]
)
;


 
 
 
 
s
e
t
J
d
M
o
d
e
(
f
a
l
s
e
)
;


 
 
 
 
s
e
t
J
o
b
D
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
(
"
"
)
;


 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
t
r
u
e
)
;




 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
{
 
d
a
t
a
 
}
 
=
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
<
L
a
t
e
x
C
h
a
t
R
e
s
p
o
n
s
e
>
(
"
/
a
t
s
/
l
a
t
e
x
-
o
p
t
i
m
i
z
e
-
j
d
"
,
 
{


 
 
 
 
 
 
 
 
l
a
t
e
x
C
o
d
e
:
 
c
o
d
e
,


 
 
 
 
 
 
 
 
j
o
b
D
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
:
 
j
d
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
s
e
t
M
e
s
s
a
g
e
s
(
(
p
r
e
v
)
 
=
>
 
[


 
 
 
 
 
 
 
 
.
.
.
p
r
e
v
,


 
 
 
 
 
 
 
 
{
 
r
o
l
e
:
 
"
a
s
s
i
s
t
a
n
t
"
,
 
c
o
n
t
e
n
t
:
 
d
a
t
a
.
r
e
p
l
y
,
 
u
p
d
a
t
e
d
L
a
t
e
x
:
 
d
a
t
a
.
u
p
d
a
t
e
d
L
a
t
e
x
 
}
,


 
 
 
 
 
 
]
)
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
m
e
s
s
a
g
e
 
=


 
 
 
 
 
 
 
 
e
r
r
 
&
&
 
t
y
p
e
o
f
 
e
r
r
 
=
=
=
 
"
o
b
j
e
c
t
"
 
&
&
 
"
r
e
s
p
o
n
s
e
"
 
i
n
 
e
r
r


 
 
 
 
 
 
 
 
 
 
?
 
(
(
e
r
r
 
a
s
 
{
 
r
e
s
p
o
n
s
e
?
:
 
{
 
d
a
t
a
?
:
 
{
 
m
e
s
s
a
g
e
?
:
 
s
t
r
i
n
g
 
}
 
}
 
}
)
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
?
.
m
e
s
s
a
g
e
 
?
?


 
 
 
 
 
 
 
 
 
 
 
 
"
S
o
m
e
t
h
i
n
g
 
w
e
n
t
 
w
r
o
n
g
"
)


 
 
 
 
 
 
 
 
 
 
:
 
"
S
o
m
e
t
h
i
n
g
 
w
e
n
t
 
w
r
o
n
g
"
;


 
 
 
 
 
 
s
e
t
M
e
s
s
a
g
e
s
(
(
p
r
e
v
)
 
=
>
 
[
.
.
.
p
r
e
v
,
 
{
 
r
o
l
e
:
 
"
a
s
s
i
s
t
a
n
t
"
,
 
c
o
n
t
e
n
t
:
 
m
e
s
s
a
g
e
 
}
]
)
;


 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
}


 
 
}
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
A
p
p
l
y
 
=
 
(
i
d
x
:
 
n
u
m
b
e
r
,
 
l
a
t
e
x
:
 
s
t
r
i
n
g
)
 
=
>
 
{


 
 
 
 
o
n
A
p
p
l
y
C
o
d
e
(
l
a
t
e
x
)
;


 
 
 
 
s
e
t
A
p
p
l
i
e
d
I
d
x
(
i
d
x
)
;


 
 
 
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
s
e
t
A
p
p
l
i
e
d
I
d
x
(
n
u
l
l
)
,
 
2
0
0
0
)
;


 
 
}
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
K
e
y
D
o
w
n
 
=
 
(
e
:
 
R
e
a
c
t
.
K
e
y
b
o
a
r
d
E
v
e
n
t
)
 
=
>
 
{


 
 
 
 
i
f
 
(
e
.
k
e
y
 
=
=
=
 
"
E
n
t
e
r
"
 
&
&
 
!
e
.
s
h
i
f
t
K
e
y
)
 
{


 
 
 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
 
 
h
a
n
d
l
e
S
e
n
d
(
)
;


 
 
 
 
}


 
 
}
;




 
 
/
/
 
P
a
n
e
l
 
c
l
a
s
s
e
s
,
 
m
o
b
i
l
e
:
 
f
u
l
l
 
s
c
r
e
e
n
,
 
d
e
s
k
t
o
p
:
 
f
l
o
a
t
i
n
g
 
c
a
r
d


 
 
c
o
n
s
t
 
p
a
n
e
l
C
l
a
s
s
 
=


 
 
 
 
"
f
i
x
e
d
 
i
n
s
e
t
-
0
 
z
-
5
0
 
l
g
:
i
n
s
e
t
-
a
u
t
o
 
l
g
:
r
i
g
h
t
-
6
 
l
g
:
b
o
t
t
o
m
-
6
 
l
g
:
w
-
9
6
 
l
g
:
h
-
[
5
4
0
p
x
]
 
l
g
:
r
o
u
n
d
e
d
-
2
x
l
 
b
g
-
w
h
i
t
e
 
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
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
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
g
r
a
y
-
8
0
0
 
s
h
a
d
o
w
-
2
x
l
 
f
l
e
x
 
f
l
e
x
-
c
o
l
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
;




 
 
/
/
 
P
r
e
m
i
u
m
 
g
a
t
e


 
 
i
f
 
(
!
i
s
P
r
e
m
i
u
m
)
 
{


 
 
 
 
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
{
p
a
n
e
l
C
l
a
s
s
}
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
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
p
x
-
4
 
p
y
-
3
 
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
g
r
a
y
-
1
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
g
r
a
y
-
8
0
0
"
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
s
m
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
8
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
g
r
a
y
-
2
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
A
I
 
R
e
s
u
m
e
 
A
s
s
i
s
t
a
n
t


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
"


 
 
 
 
 
 
 
 
 
 
 
 
m
o
d
e
=
"
i
c
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
o
n
C
l
o
s
e
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
X
 
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
w
-
4
 
h
-
4
 
t
e
x
t
-
g
r
a
y
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
<
/
d
i
v
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
f
l
e
x
-
1
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
p
-
6
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
t
e
x
t
-
c
e
n
t
e
r
 
m
a
x
-
w
-
x
s
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
w
-
1
4
 
h
-
1
4
 
r
o
u
n
d
e
d
-
2
x
l
 
b
g
-
a
m
b
e
r
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
a
m
b
e
r
-
9
0
0
/
2
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
m
x
-
a
u
t
o
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
o
c
k
 
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
w
-
6
 
h
-
6
 
t
e
x
t
-
a
m
b
e
r
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
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
l
g
 
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
g
r
a
y
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
r
e
m
i
u
m
 
F
e
a
t
u
r
e


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
s
m
 
t
e
x
t
-
g
r
a
y
-
5
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
g
r
a
y
-
4
0
0
 
m
b
-
6
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
G
e
t
 
A
I
 
s
u
g
g
e
s
t
i
o
n
s
,
 
r
e
s
u
m
e
 
e
d
i
t
i
n
g
,
 
a
n
d
 
A
T
S
 
o
p
t
i
m
i
z
a
t
i
o
n
 
w
i
t
h
 
a
 
P
r
e
m
i
u
m
 
s
u
b
s
c
r
i
p
t
i
o
n
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
a
s
C
h
i
l
d
 
v
a
r
i
a
n
t
=
"
p
r
i
m
a
r
y
"
 
s
i
z
e
=
"
m
d
"
 
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
r
o
u
n
d
e
d
-
x
l
 
b
g
-
i
n
d
i
g
o
-
6
0
0
 
h
o
v
e
r
:
b
g
-
i
n
d
i
g
o
-
7
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
s
t
u
d
e
n
t
/
c
h
e
c
k
o
u
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
U
p
g
r
a
d
e
 
t
o
 
P
r
e
m
i
u
m


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
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


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
)
;


 
 
}




 
 
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
{
p
a
n
e
l
C
l
a
s
s
}
>


 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
r
 
*
/
}


 
 
 
 
 
 
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
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
p
x
-
4
 
p
y
-
3
 
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
g
r
a
y
-
1
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
g
r
a
y
-
8
0
0
 
s
h
r
i
n
k
-
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
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
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
w
-
6
 
h
-
6
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
i
n
d
i
g
o
-
6
0
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
o
t
 
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
w
-
3
.
5
 
h
-
3
.
5
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
s
m
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
8
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
g
r
a
y
-
2
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
A
I
 
A
s
s
i
s
t
a
n
t


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
o
n
C
l
o
s
e
}


 
 
 
 
 
 
 
 
 
 
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
w
-
7
 
h
-
7
 
r
o
u
n
d
e
d
-
l
g
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
g
r
a
y
-
8
0
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
X
 
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
w
-
4
 
h
-
4
 
t
e
x
t
-
g
r
a
y
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
M
e
s
s
a
g
e
s
 
*
/
}


 
 
 
 
 
 
<
d
i
v
 
r
e
f
=
{
s
c
r
o
l
l
R
e
f
}
 
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
f
l
e
x
-
1
 
o
v
e
r
f
l
o
w
-
y
-
a
u
t
o
 
p
x
-
4
 
p
y
-
3
 
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
{
m
e
s
s
a
g
e
s
.
l
e
n
g
t
h
 
=
=
=
 
0
 
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
t
e
x
t
-
c
e
n
t
e
r
 
p
y
-
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
w
-
1
0
 
h
-
1
0
 
r
o
u
n
d
e
d
-
x
l
 
b
g
-
g
r
a
y
-
1
0
0
 
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
8
0
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
m
x
-
a
u
t
o
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
s
s
a
g
e
S
q
u
a
r
e
 
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
w
-
4
.
5
 
h
-
4
.
5
 
t
e
x
t
-
g
r
a
y
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
6
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
g
r
a
y
-
3
0
0
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
H
o
w
 
c
a
n
 
I
 
h
e
l
p
?


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
s
 
t
e
x
t
-
g
r
a
y
-
4
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
g
r
a
y
-
5
0
0
 
m
a
x
-
w
-
5
2
 
m
x
-
a
u
t
o
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
E
d
i
t
 
y
o
u
r
 
r
e
s
u
m
e
,
 
a
d
d
 
s
e
c
t
i
o
n
s
,
 
r
e
w
o
r
d
 
e
x
p
e
r
i
e
n
c
e
,
 
o
r
 
o
p
t
i
m
i
z
e
 
f
o
r
 
a
 
j
o
b
 
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
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
i
n
i
t
i
a
l
=
{
f
a
l
s
e
}
>


 
 
 
 
 
 
 
 
 
 
{
m
e
s
s
a
g
e
s
.
m
a
p
(
(
m
s
g
,
 
i
d
x
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
d
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
6
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
1
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
f
l
e
x
 
$
{
m
s
g
.
r
o
l
e
 
=
=
=
 
"
u
s
e
r
"
 
?
 
"
j
u
s
t
i
f
y
-
e
n
d
"
 
:
 
"
j
u
s
t
i
f
y
-
s
t
a
r
t
"
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
m
a
x
-
w
-
[
8
5
%
]
 
r
o
u
n
d
e
d
-
2
x
l
 
p
x
-
3
.
5
 
p
y
-
2
.
5
 
t
e
x
t
-
[
1
3
p
x
]
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
s
g
.
r
o
l
e
 
=
=
=
 
"
u
s
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
i
n
d
i
g
o
-
6
0
0
 
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
 
r
o
u
n
d
e
d
-
b
r
-
m
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
g
r
a
y
-
1
0
0
 
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
8
0
0
 
t
e
x
t
-
g
r
a
y
-
8
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
g
r
a
y
-
2
0
0
 
r
o
u
n
d
e
d
-
b
l
-
m
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
w
h
i
t
e
s
p
a
c
e
-
p
r
e
-
w
r
a
p
"
>
{
r
e
n
d
e
r
M
a
r
k
d
o
w
n
(
m
s
g
.
c
o
n
t
e
n
t
)
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
s
g
.
r
o
l
e
 
=
=
=
 
"
a
s
s
i
s
t
a
n
t
"
 
&
&
 
m
s
g
.
u
p
d
a
t
e
d
L
a
t
e
x
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
h
a
n
d
l
e
A
p
p
l
y
(
i
d
x
,
 
m
s
g
.
u
p
d
a
t
e
d
L
a
t
e
x
!
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
a
p
p
l
i
e
d
I
d
x
 
=
=
=
 
i
d
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
m
t
-
2
.
5
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
p
p
l
i
e
d
I
d
x
 
=
=
=
 
i
d
x


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
g
r
e
e
n
-
1
0
0
 
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
e
e
n
-
9
0
0
/
3
0
 
t
e
x
t
-
g
r
e
e
n
-
7
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
g
r
e
e
n
-
4
0
0
 
h
o
v
e
r
:
b
g
-
g
r
e
e
n
-
1
0
0
 
h
o
v
e
r
:
t
e
x
t
-
g
r
e
e
n
-
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
i
n
d
i
g
o
-
1
0
0
 
d
a
r
k
:
b
g
-
i
n
d
i
g
o
-
9
0
0
/
3
0
 
t
e
x
t
-
i
n
d
i
g
o
-
7
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
i
n
d
i
g
o
-
4
0
0
 
h
o
v
e
r
:
b
g
-
i
n
d
i
g
o
-
2
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
i
n
d
i
g
o
-
9
0
0
/
5
0
 
h
o
v
e
r
:
t
e
x
t
-
i
n
d
i
g
o
-
7
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
i
n
d
i
g
o
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
p
p
l
i
e
d
I
d
x
 
=
=
=
 
i
d
x
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
 
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
w
-
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
p
p
l
i
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
l
e
T
e
x
t
 
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
w
-
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
p
p
l
y
 
t
o
 
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>




 
 
 
 
 
 
 
 
{
l
o
a
d
i
n
g
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
f
l
e
x
 
j
u
s
t
i
f
y
-
s
t
a
r
t
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
b
g
-
g
r
a
y
-
1
0
0
 
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
8
0
0
 
r
o
u
n
d
e
d
-
2
x
l
 
r
o
u
n
d
e
d
-
b
l
-
m
d
 
p
x
-
3
.
5
 
p
y
-
2
.
5
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
o
a
d
e
r
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
w
-
3
.
5
 
h
-
3
.
5
 
t
e
x
t
-
i
n
d
i
g
o
-
5
0
0
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
s
 
t
e
x
t
-
g
r
a
y
-
5
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
g
r
a
y
-
4
0
0
"
>
T
h
i
n
k
i
n
g
.
.
.
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
J
D
 
O
p
t
i
m
i
z
a
t
i
o
n
 
*
/
}


 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
{
j
d
M
o
d
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
h
e
i
g
h
t
:
 
0
,
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
,
 
o
p
a
c
i
t
y
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
h
e
i
g
h
t
:
 
0
,
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
2
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
g
r
a
y
-
1
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
g
r
a
y
-
8
0
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
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
p
x
-
4
 
p
y
-
3
 
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
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
s
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
6
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
g
r
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
a
s
t
e
 
t
h
e
 
j
o
b
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
j
o
b
D
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
J
o
b
D
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
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
P
a
s
t
e
 
t
h
e
 
f
u
l
l
 
j
o
b
 
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
 
h
e
r
e
 
(
m
i
n
 
5
0
 
c
h
a
r
a
c
t
e
r
s
)
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
s
=
{
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
w
-
f
u
l
l
 
t
e
x
t
-
s
m
 
b
g
-
g
r
a
y
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
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
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
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
x
l
 
p
x
-
3
 
p
y
-
2
.
5
 
r
e
s
i
z
e
-
n
o
n
e
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
i
n
d
i
g
o
-
5
0
0
/
3
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
i
n
d
i
g
o
-
4
0
0
 
p
l
a
c
e
h
o
l
d
e
r
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
:
t
e
x
t
-
g
r
a
y
-
6
0
0
 
t
e
x
t
-
g
r
a
y
-
8
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
g
r
a
y
-
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
p
r
i
m
a
r
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
O
p
t
i
m
i
z
e
J
D
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
j
o
b
D
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
.
t
r
i
m
(
)
.
l
e
n
g
t
h
 
<
 
5
0
 
|
|
 
l
o
a
d
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
f
l
e
x
-
1
 
r
o
u
n
d
e
d
-
x
l
 
b
g
-
i
n
d
i
g
o
-
6
0
0
 
h
o
v
e
r
:
b
g
-
i
n
d
i
g
o
-
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
a
d
i
n
g
 
?
 
<
L
o
a
d
e
r
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
w
-
3
.
5
 
h
-
3
.
5
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
/
>
 
:
 
n
u
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
O
p
t
i
m
i
z
e
 
R
e
s
u
m
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
s
e
c
o
n
d
a
r
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
J
d
M
o
d
e
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
J
o
b
D
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
(
"
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
r
o
u
n
d
e
d
-
x
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
a
n
c
e
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
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


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>




 
 
 
 
 
 
{
/
*
 
I
n
p
u
t
 
A
r
e
a
 
*
/
}


 
 
 
 
 
 
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
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
g
r
a
y
-
1
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
g
r
a
y
-
8
0
0
 
p
x
-
3
 
p
y
-
2
.
5
 
s
h
r
i
n
k
-
0
 
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
{
!
j
d
M
o
d
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
o
u
t
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
J
d
M
o
d
e
(
t
r
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
l
o
a
d
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
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
w
-
f
u
l
l
 
t
e
x
t
-
i
n
d
i
g
o
-
6
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
i
n
d
i
g
o
-
4
0
0
 
b
g
-
i
n
d
i
g
o
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
i
n
d
i
g
o
-
9
0
0
/
2
0
 
b
o
r
d
e
r
-
i
n
d
i
g
o
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
i
n
d
i
g
o
-
8
0
0
/
5
0
 
h
o
v
e
r
:
b
g
-
i
n
d
i
g
o
-
1
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
i
n
d
i
g
o
-
9
0
0
/
3
0
 
h
o
v
e
r
:
t
e
x
t
-
i
n
d
i
g
o
-
6
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
i
n
d
i
g
o
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
r
i
e
f
c
a
s
e
B
u
s
i
n
e
s
s
 
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
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
T
a
i
l
o
r
 
f
o
r
 
J
o
b
 
D
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


 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
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
f
l
e
x
 
i
t
e
m
s
-
e
n
d
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
I
n
p
u
t
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
K
e
y
D
o
w
n
=
{
h
a
n
d
l
e
K
e
y
D
o
w
n
}


 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
A
s
k
 
A
I
 
t
o
 
e
d
i
t
 
y
o
u
r
 
r
e
s
u
m
e
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
s
=
{
1
}


 
 
 
 
 
 
 
 
 
 
 
 
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
f
l
e
x
-
1
 
t
e
x
t
-
s
m
 
b
g
-
g
r
a
y
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
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
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
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
x
l
 
p
x
-
3
 
p
y
-
2
 
r
e
s
i
z
e
-
n
o
n
e
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
i
n
d
i
g
o
-
5
0
0
/
3
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
i
n
d
i
g
o
-
4
0
0
 
p
l
a
c
e
h
o
l
d
e
r
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
:
t
e
x
t
-
g
r
a
y
-
6
0
0
 
t
e
x
t
-
g
r
a
y
-
8
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
g
r
a
y
-
2
0
0
 
m
a
x
-
h
-
2
4
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
p
r
i
m
a
r
y
"


 
 
 
 
 
 
 
 
 
 
 
 
m
o
d
e
=
"
i
c
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
m
d
"


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
S
e
n
d
}


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
!
i
n
p
u
t
.
t
r
i
m
(
)
 
|
|
 
l
o
a
d
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
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
s
h
r
i
n
k
-
0
 
b
g
-
i
n
d
i
g
o
-
6
0
0
 
h
o
v
e
r
:
b
g
-
i
n
d
i
g
o
-
7
0
0
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
a
d
i
n
g
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
o
a
d
e
r
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
w
-
3
.
5
 
h
-
3
.
5
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
n
d
 
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
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


