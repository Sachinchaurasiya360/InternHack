
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
M
e
m
o
,
 
u
s
e
S
t
a
t
e
 
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
 
B
o
o
k
O
p
e
n
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
t
 
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
 
{


 
 
L
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
,


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
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
{


 
 
A
l
g
o
C
a
n
v
a
s
,


 
 
I
n
p
u
t
E
d
i
t
o
r
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
,


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
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
"
;


i
m
p
o
r
t
 
{


 
 
C
a
l
l
o
u
t
,


 
 
C
a
r
d
,


 
 
L
e
d
e
,


 
 
P
i
l
l
B
u
t
t
o
n
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
,


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
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
e
s
"
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
C
o
m
m
o
n
 
h
e
l
p
e
r
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
B
a
s
e
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
v
a
r
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
|
 
u
n
d
e
f
i
n
e
d
>
;


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
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
 
p
a
r
s
e
I
n
t
s
(
s
:
 
s
t
r
i
n
g
,
 
m
a
x
N
 
=
 
1
4
)
:
 
n
u
m
b
e
r
[
]
 
|
 
n
u
l
l
 
{


 
 
c
o
n
s
t
 
n
u
m
s
 
=
 
s
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
)
.
m
a
p
(
N
u
m
b
e
r
)
.
f
i
l
t
e
r
(
(
x
)
 
=
>
 
!
N
u
m
b
e
r
.
i
s
N
a
N
(
x
)
)
;


 
 
i
f
 
(
n
u
m
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
 
|
|
 
n
u
m
s
.
l
e
n
g
t
h
 
>
 
m
a
x
N
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
r
e
t
u
r
n
 
n
u
m
s
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
B
-
T
R
E
E
 
(
o
r
d
e
r
 
t
=
2
,
 
m
a
x
 
3
 
k
e
y
s
 
p
e
r
 
n
o
d
e
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




i
n
t
e
r
f
a
c
e
 
B
N
o
d
e
 
{
 
i
d
:
 
s
t
r
i
n
g
;
 
k
e
y
s
:
 
n
u
m
b
e
r
[
]
;
 
c
h
i
l
d
r
e
n
:
 
s
t
r
i
n
g
[
]
;
 
}


i
n
t
e
r
f
a
c
e
 
B
F
r
a
m
e
 
e
x
t
e
n
d
s
 
B
a
s
e
F
r
a
m
e
 
{


 
 
n
o
d
e
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
B
N
o
d
e
>
;


 
 
r
o
o
t
I
d
:
 
s
t
r
i
n
g
;


 
 
a
c
t
i
v
e
I
d
?
:
 
s
t
r
i
n
g
;


 
 
s
p
l
i
t
t
i
n
g
I
d
?
:
 
s
t
r
i
n
g
;


}




c
o
n
s
t
 
P
S
E
U
D
O
_
B
 
=
 
[


 
 
"
#
 
B
-
T
r
e
e
 
i
n
s
e
r
t
 
(
o
r
d
e
r
 
t
=
2
,
 
m
a
x
 
3
 
k
e
y
s
)
"
,


 
 
"
f
u
n
c
t
i
o
n
 
i
n
s
e
r
t
(
k
e
y
)
:
"
,


 
 
"
 
 
i
f
 
r
o
o
t
 
i
s
 
f
u
l
l
:
 
s
p
l
i
t
 
r
o
o
t
 
(
n
e
w
 
r
o
o
t
 
c
r
e
a
t
e
d
)
"
,


 
 
"
 
 
i
n
s
e
r
t
N
o
n
F
u
l
l
(
r
o
o
t
,
 
k
e
y
)
"
,


 
 
"
f
u
n
c
t
i
o
n
 
i
n
s
e
r
t
N
o
n
F
u
l
l
(
x
,
 
k
)
:
"
,


 
 
"
 
 
i
f
 
x
 
i
s
 
l
e
a
f
:
 
i
n
s
e
r
t
 
k
 
i
n
 
s
o
r
t
e
d
 
p
o
s
i
t
i
o
n
"
,


 
 
"
 
 
e
l
s
e
:
 
d
e
s
c
e
n
d
 
t
o
 
c
h
i
l
d
;
 
s
p
l
i
t
 
i
f
 
c
h
i
l
d
 
f
u
l
l
"
,


]
;




f
u
n
c
t
i
o
n
 
c
l
o
n
e
B
N
o
d
e
s
(
n
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
B
N
o
d
e
>
)
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
B
N
o
d
e
>
 
{


 
 
c
o
n
s
t
 
r
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
B
N
o
d
e
>
 
=
 
{
}
;


 
 
f
o
r
 
(
c
o
n
s
t
 
k
 
i
n
 
n
)
 
r
[
k
]
 
=
 
{
 
.
.
.
n
[
k
]
,
 
k
e
y
s
:
 
[
.
.
.
n
[
k
]
.
k
e
y
s
]
,
 
c
h
i
l
d
r
e
n
:
 
[
.
.
.
n
[
k
]
.
c
h
i
l
d
r
e
n
]
 
}
;


 
 
r
e
t
u
r
n
 
r
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
 
b
u
i
l
d
B
F
r
a
m
e
s
(
k
e
y
s
T
o
I
n
s
e
r
t
:
 
n
u
m
b
e
r
[
]
)
:
 
B
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
B
F
r
a
m
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
 
i
d
C
o
u
n
t
e
r
 
=
 
0
;


 
 
c
o
n
s
t
 
m
k
I
d
 
=
 
(
)
 
=
>
 
`
b
$
{
i
d
C
o
u
n
t
e
r
+
+
}
`
;


 
 
c
o
n
s
t
 
M
A
X
_
K
E
Y
S
 
=
 
3
;


 
 
c
o
n
s
t
 
n
o
d
e
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
B
N
o
d
e
>
 
=
 
{
}
;


 
 
l
e
t
 
r
o
o
t
I
d
 
=
 
m
k
I
d
(
)
;


 
 
n
o
d
e
s
[
r
o
o
t
I
d
]
 
=
 
{
 
i
d
:
 
r
o
o
t
I
d
,
 
k
e
y
s
:
 
[
]
,
 
c
h
i
l
d
r
e
n
:
 
[
]
 
}
;




 
 
f
u
n
c
t
i
o
n
 
s
n
a
p
s
h
o
t
(
m
s
g
:
 
s
t
r
i
n
g
,
 
l
i
n
e
:
 
n
u
m
b
e
r
,
 
a
c
t
i
v
e
I
d
?
:
 
s
t
r
i
n
g
,
 
e
x
t
r
a
:
 
P
a
r
t
i
a
l
<
B
F
r
a
m
e
>
 
=
 
{
}
)
 
{


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
,
 
v
a
r
s
:
 
{
 
k
e
y
s
:
 
k
e
y
s
T
o
I
n
s
e
r
t
.
j
o
i
n
(
"
,
"
)
,
 
n
o
d
e
s
:
 
O
b
j
e
c
t
.
k
e
y
s
(
n
o
d
e
s
)
.
l
e
n
g
t
h
,
 
r
o
o
t
:
 
r
o
o
t
I
d
 
}
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
 
n
o
d
e
s
:
 
c
l
o
n
e
B
N
o
d
e
s
(
n
o
d
e
s
)
,
 
r
o
o
t
I
d
,
 
a
c
t
i
v
e
I
d
,
 
.
.
.
e
x
t
r
a
 
}
)
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
 
s
p
l
i
t
C
h
i
l
d
(
p
a
r
e
n
t
:
 
B
N
o
d
e
,
 
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
)
 
{


 
 
 
 
c
o
n
s
t
 
c
h
i
l
d
 
=
 
n
o
d
e
s
[
p
a
r
e
n
t
.
c
h
i
l
d
r
e
n
[
i
d
x
]
]
;


 
 
 
 
c
o
n
s
t
 
m
i
d
K
e
y
 
=
 
c
h
i
l
d
.
k
e
y
s
[
1
]
;


 
 
 
 
c
o
n
s
t
 
r
i
g
h
t
:
 
B
N
o
d
e
 
=
 
{
 
i
d
:
 
m
k
I
d
(
)
,
 
k
e
y
s
:
 
c
h
i
l
d
.
k
e
y
s
.
s
l
i
c
e
(
2
)
,
 
c
h
i
l
d
r
e
n
:
 
c
h
i
l
d
.
c
h
i
l
d
r
e
n
.
s
l
i
c
e
(
2
)
 
}
;


 
 
 
 
c
h
i
l
d
.
k
e
y
s
 
=
 
c
h
i
l
d
.
k
e
y
s
.
s
l
i
c
e
(
0
,
 
1
)
;


 
 
 
 
c
h
i
l
d
.
c
h
i
l
d
r
e
n
 
=
 
c
h
i
l
d
.
c
h
i
l
d
r
e
n
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
)
;


 
 
 
 
n
o
d
e
s
[
r
i
g
h
t
.
i
d
]
 
=
 
r
i
g
h
t
;


 
 
 
 
p
a
r
e
n
t
.
k
e
y
s
.
s
p
l
i
c
e
(
i
d
x
,
 
0
,
 
m
i
d
K
e
y
)
;


 
 
 
 
p
a
r
e
n
t
.
c
h
i
l
d
r
e
n
.
s
p
l
i
c
e
(
i
d
x
 
+
 
1
,
 
0
,
 
r
i
g
h
t
.
i
d
)
;


 
 
 
 
s
n
a
p
s
h
o
t
(
`
S
p
l
i
t
 
c
h
i
l
d
:
 
l
i
f
t
 
$
{
m
i
d
K
e
y
}
 
u
p
,
 
c
r
e
a
t
e
 
n
e
w
 
r
i
g
h
t
 
n
o
d
e
.
`
,
 
2
,
 
p
a
r
e
n
t
.
i
d
,
 
{
 
s
p
l
i
t
t
i
n
g
I
d
:
 
r
i
g
h
t
.
i
d
 
}
)
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
 
i
n
s
e
r
t
N
o
n
F
u
l
l
(
x
:
 
B
N
o
d
e
,
 
k
:
 
n
u
m
b
e
r
)
 
{


 
 
 
 
i
f
 
(
x
.
c
h
i
l
d
r
e
n
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
 
{


 
 
 
 
 
 
l
e
t
 
i
 
=
 
x
.
k
e
y
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
;


 
 
 
 
 
 
w
h
i
l
e
 
(
i
 
>
=
 
0
 
&
&
 
x
.
k
e
y
s
[
i
]
 
>
 
k
)
 
i
-
-
;


 
 
 
 
 
 
x
.
k
e
y
s
.
s
p
l
i
c
e
(
i
 
+
 
1
,
 
0
,
 
k
)
;


 
 
 
 
 
 
s
n
a
p
s
h
o
t
(
`
I
n
s
e
r
t
e
d
 
$
{
k
}
 
i
n
t
o
 
l
e
a
f
 
n
o
d
e
.
`
,
 
5
,
 
x
.
i
d
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
l
e
t
 
i
 
=
 
x
.
k
e
y
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
;


 
 
 
 
 
 
w
h
i
l
e
 
(
i
 
>
=
 
0
 
&
&
 
x
.
k
e
y
s
[
i
]
 
>
 
k
)
 
i
-
-
;


 
 
 
 
 
 
i
+
+
;


 
 
 
 
 
 
c
o
n
s
t
 
c
h
i
l
d
 
=
 
n
o
d
e
s
[
x
.
c
h
i
l
d
r
e
n
[
i
]
]
;


 
 
 
 
 
 
s
n
a
p
s
h
o
t
(
`
D
e
s
c
e
n
d
 
i
n
t
o
 
c
h
i
l
d
 
f
o
r
 
$
{
k
}
.
`
,
 
6
,
 
c
h
i
l
d
.
i
d
)
;


 
 
 
 
 
 
i
f
 
(
c
h
i
l
d
.
k
e
y
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
 
M
A
X
_
K
E
Y
S
)
 
{


 
 
 
 
 
 
 
 
s
p
l
i
t
C
h
i
l
d
(
x
,
 
i
)
;


 
 
 
 
 
 
 
 
i
f
 
(
k
 
>
 
x
.
k
e
y
s
[
i
]
)
 
i
+
+
;


 
 
 
 
 
 
}


 
 
 
 
 
 
i
n
s
e
r
t
N
o
n
F
u
l
l
(
n
o
d
e
s
[
x
.
c
h
i
l
d
r
e
n
[
i
]
]
,
 
k
)
;


 
 
 
 
}


 
 
}




 
 
s
n
a
p
s
h
o
t
(
"
E
m
p
t
y
 
B
-
T
r
e
e
.
 
S
t
a
r
t
 
i
n
s
e
r
t
i
n
g
 
k
e
y
s
.
"
,
 
0
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
k
 
o
f
 
k
e
y
s
T
o
I
n
s
e
r
t
)
 
{


 
 
 
 
s
n
a
p
s
h
o
t
(
`
I
n
s
e
r
t
 
$
{
k
}
.
`
,
 
1
)
;


 
 
 
 
c
o
n
s
t
 
r
o
o
t
 
=
 
n
o
d
e
s
[
r
o
o
t
I
d
]
;


 
 
 
 
i
f
 
(
r
o
o
t
.
k
e
y
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
 
M
A
X
_
K
E
Y
S
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
R
o
o
t
:
 
B
N
o
d
e
 
=
 
{
 
i
d
:
 
m
k
I
d
(
)
,
 
k
e
y
s
:
 
[
]
,
 
c
h
i
l
d
r
e
n
:
 
[
r
o
o
t
I
d
]
 
}
;


 
 
 
 
 
 
n
o
d
e
s
[
n
e
w
R
o
o
t
.
i
d
]
 
=
 
n
e
w
R
o
o
t
;


 
 
 
 
 
 
r
o
o
t
I
d
 
=
 
n
e
w
R
o
o
t
.
i
d
;


 
 
 
 
 
 
s
p
l
i
t
C
h
i
l
d
(
n
e
w
R
o
o
t
,
 
0
)
;


 
 
 
 
}


 
 
 
 
i
n
s
e
r
t
N
o
n
F
u
l
l
(
n
o
d
e
s
[
r
o
o
t
I
d
]
,
 
k
)
;


 
 
}


 
 
s
n
a
p
s
h
o
t
(
"
D
o
n
e
.
"
,
 
0
)
;


 
 
r
e
t
u
r
n
 
f
r
a
m
e
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
 
B
T
r
e
e
N
o
d
e
(
{
 
n
o
d
e
,
 
a
c
t
i
v
e
I
d
,
 
s
p
l
i
t
t
i
n
g
I
d
 
}
:
 
{
 
n
o
d
e
:
 
B
N
o
d
e
;
 
a
c
t
i
v
e
I
d
?
:
 
s
t
r
i
n
g
;
 
s
p
l
i
t
t
i
n
g
I
d
?
:
 
s
t
r
i
n
g
 
}
)
 
{


 
 
c
o
n
s
t
 
i
s
A
c
t
i
v
e
 
=
 
n
o
d
e
.
i
d
 
=
=
=
 
a
c
t
i
v
e
I
d
;


 
 
c
o
n
s
t
 
i
s
S
p
l
i
t
 
=
 
n
o
d
e
.
i
d
 
=
=
=
 
s
p
l
i
t
t
i
n
g
I
d
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
f
l
e
x
 
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
a
l
l
"


 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
i
s
S
p
l
i
t
 
?
 
"
2
p
x
 
s
o
l
i
d
 
#
f
5
9
e
0
b
"
 
:
 
i
s
A
c
t
i
v
e
 
?
 
`
2
p
x
 
s
o
l
i
d
 
$
{
T
H
E
M
E
.
a
c
c
e
n
t
}
`
 
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
T
H
E
M
E
.
b
o
r
d
e
r
}
`
,


 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
i
s
A
c
t
i
v
e
 
?
 
`
$
{
T
H
E
M
E
.
a
c
c
e
n
t
}
1
0
`
 
:
 
i
s
S
p
l
i
t
 
?
 
"
r
g
b
a
(
2
4
5
,
1
5
8
,
1
1
,
0
.
1
)
"
 
:
 
T
H
E
M
E
.
b
g
,


 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
4
p
x
 
2
p
x
"
,


 
 
 
 
 
 
}
}


 
 
 
 
>


 
 
 
 
 
 
{
n
o
d
e
.
k
e
y
s
.
m
a
p
(
(
k
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
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
p
x
-
2
.
5
 
p
y
-
1
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
e
x
t
r
a
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
m
"


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
i
g
h
t
:
 
i
 
<
 
n
o
d
e
.
k
e
y
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
 
?
 
`
1
p
x
 
s
o
l
i
d
 
$
{
T
H
E
M
E
.
b
o
r
d
e
r
}
`
 
:
 
"
n
o
n
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
T
H
E
M
E
.
t
e
x
t
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
k
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
{
n
o
d
e
.
k
e
y
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
p
x
-
2
.
5
 
p
y
-
1
 
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
4
0
0
 
i
t
a
l
i
c
 
t
e
x
t
-
x
s
"
>
e
m
p
t
y
<
/
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


 
 
)
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
 
B
T
r
e
e
V
i
z
(
{
 
f
r
a
m
e
 
}
:
 
{
 
f
r
a
m
e
:
 
B
F
r
a
m
e
 
}
)
 
{


 
 
c
o
n
s
t
 
l
e
v
e
l
s
:
 
s
t
r
i
n
g
[
]
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
 
v
i
s
i
t
 
=
 
(
i
d
:
 
s
t
r
i
n
g
,
 
d
e
p
t
h
:
 
n
u
m
b
e
r
)
 
=
>
 
{


 
 
 
 
(
l
e
v
e
l
s
[
d
e
p
t
h
]
 
|
|
=
 
[
]
)
.
p
u
s
h
(
i
d
)
;


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
c
 
o
f
 
f
r
a
m
e
.
n
o
d
e
s
[
i
d
]
.
c
h
i
l
d
r
e
n
)
 
v
i
s
i
t
(
c
,
 
d
e
p
t
h
 
+
 
1
)
;


 
 
}
;


 
 
i
f
 
(
f
r
a
m
e
.
n
o
d
e
s
[
f
r
a
m
e
.
r
o
o
t
I
d
]
)
 
v
i
s
i
t
(
f
r
a
m
e
.
r
o
o
t
I
d
,
 
0
)
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
 
g
a
p
-
3
.
5
 
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
"
>


 
 
 
 
 
 
{
l
e
v
e
l
s
.
m
a
p
(
(
l
v
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
{
i
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
 
g
a
p
-
4
 
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
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
{
l
v
.
m
a
p
(
(
i
d
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
B
T
r
e
e
N
o
d
e
 
k
e
y
=
{
i
d
}
 
n
o
d
e
=
{
f
r
a
m
e
.
n
o
d
e
s
[
i
d
]
}
 
a
c
t
i
v
e
I
d
=
{
f
r
a
m
e
.
a
c
t
i
v
e
I
d
}
 
s
p
l
i
t
t
i
n
g
I
d
=
{
f
r
a
m
e
.
s
p
l
i
t
t
i
n
g
I
d
}
 
/
>


 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
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
 
B
T
r
e
e
V
i
s
u
a
l
i
z
e
r
(
)
 
{


 
 
c
o
n
s
t
 
[
s
r
c
,
 
s
e
t
S
r
c
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
1
0
,
 
2
0
,
 
5
,
 
6
,
 
1
2
,
 
3
0
,
 
7
,
 
1
7
"
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
b
u
i
l
d
B
F
r
a
m
e
s
(
p
a
r
s
e
I
n
t
s
(
s
r
c
)
 
?
?
 
[
1
0
,
 
2
0
,
 
5
,
 
6
,
 
1
2
,
 
3
0
,
 
7
,
 
1
7
]
)
,
 
[
s
r
c
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
"
B
-
T
r
e
e
 
I
n
s
e
r
t
i
o
n
 
(
o
r
d
e
r
 
t
=
2
,
 
m
a
x
 
3
 
k
e
y
s
/
n
o
d
e
)
"


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
K
e
y
s
 
t
o
 
i
n
s
e
r
t
 
(
c
o
m
m
a
-
s
e
p
a
r
a
t
e
d
,
 
u
p
 
t
o
 
1
4
)
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
r
c
}


 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
l
a
s
s
i
c
"
,
 
v
a
l
u
e
:
 
"
1
0
,
 
2
0
,
 
5
,
 
6
,
 
1
2
,
 
3
0
,
 
7
,
 
1
7
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
A
s
c
e
n
d
i
n
g
"
,
 
v
a
l
u
e
:
 
"
1
,
 
2
,
 
3
,
 
4
,
 
5
,
 
6
,
 
7
,
 
8
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
R
a
n
d
o
m
"
,
 
v
a
l
u
e
:
 
"
5
0
,
 
3
0
,
 
2
0
,
 
7
0
,
 
4
0
,
 
1
0
,
 
6
0
"
 
}
,


 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{
 
i
f
 
(
p
a
r
s
e
I
n
t
s
(
v
)
)
 
s
e
t
S
r
c
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
P
S
E
U
D
O
_
B
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
/
>
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
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
.
5
"
>


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
B
T
r
e
e
V
i
z
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
/
>
}


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
{
f
r
a
m
e
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
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
.
"
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
R
E
D
-
B
L
A
C
K
 
T
R
E
E
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




t
y
p
e
 
R
B
C
o
l
o
r
 
=
 
"
R
"
 
|
 
"
B
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
 
R
B
N
o
d
e
 
{
 
i
d
:
 
s
t
r
i
n
g
;
 
k
e
y
:
 
n
u
m
b
e
r
;
 
c
o
l
o
r
:
 
R
B
C
o
l
o
r
;
 
l
e
f
t
?
:
 
s
t
r
i
n
g
;
 
r
i
g
h
t
?
:
 
s
t
r
i
n
g
;
 
p
a
r
e
n
t
?
:
 
s
t
r
i
n
g
 
}


i
n
t
e
r
f
a
c
e
 
R
B
F
r
a
m
e
 
e
x
t
e
n
d
s
 
B
a
s
e
F
r
a
m
e
 
{


 
 
n
o
d
e
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
R
B
N
o
d
e
>
;


 
 
r
o
o
t
I
d
?
:
 
s
t
r
i
n
g
;


 
 
a
c
t
i
v
e
I
d
?
:
 
s
t
r
i
n
g
;


}




c
o
n
s
t
 
P
S
E
U
D
O
_
R
B
 
=
 
[


 
 
"
#
 
R
e
d
-
B
l
a
c
k
 
i
n
s
e
r
t
 
(
n
o
d
e
s
 
s
t
a
r
t
 
R
E
D
)
"
,


 
 
"
f
u
n
c
t
i
o
n
 
i
n
s
e
r
t
(
k
e
y
)
:
"
,


 
 
"
 
 
s
t
a
n
d
a
r
d
 
B
S
T
 
i
n
s
e
r
t
,
 
n
e
w
 
n
o
d
e
 
=
 
R
E
D
"
,


 
 
"
 
 
f
i
x
U
p
(
)
 
w
h
i
l
e
 
p
a
r
e
n
t
 
i
s
 
R
E
D
:
"
,


 
 
"
 
 
 
 
C
a
s
e
 
1
:
 
u
n
c
l
e
 
R
E
D
 
-
>
 
r
e
c
o
l
o
r
 
p
a
r
e
n
t
,
 
u
n
c
l
e
 
B
L
A
C
K
"
,


 
 
"
 
 
 
 
C
a
s
e
 
2
:
 
z
i
g
-
z
a
g
 
-
>
 
r
o
t
a
t
e
 
p
a
r
e
n
t
"
,


 
 
"
 
 
 
 
C
a
s
e
 
3
:
 
s
t
r
a
i
g
h
t
 
l
i
n
e
 
-
>
 
r
o
t
a
t
e
 
g
r
a
n
d
p
a
r
e
n
t
 
+
 
r
e
c
o
l
o
r
"
,


 
 
"
 
 
r
o
o
t
.
c
o
l
o
r
 
=
 
B
L
A
C
K
"
,


]
;




f
u
n
c
t
i
o
n
 
c
l
o
n
e
R
B
(
n
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
R
B
N
o
d
e
>
)
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
R
B
N
o
d
e
>
 
{


 
 
c
o
n
s
t
 
r
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
R
B
N
o
d
e
>
 
=
 
{
}
;


 
 
f
o
r
 
(
c
o
n
s
t
 
k
 
i
n
 
n
)
 
r
[
k
]
 
=
 
{
 
.
.
.
n
[
k
]
 
}
;


 
 
r
e
t
u
r
n
 
r
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
 
b
u
i
l
d
R
B
F
r
a
m
e
s
(
k
e
y
s
:
 
n
u
m
b
e
r
[
]
)
:
 
R
B
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
R
B
F
r
a
m
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
 
n
o
d
e
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
R
B
N
o
d
e
>
 
=
 
{
}
;


 
 
l
e
t
 
r
o
o
t
I
d
:
 
s
t
r
i
n
g
 
|
 
u
n
d
e
f
i
n
e
d
;


 
 
l
e
t
 
c
o
u
n
t
e
r
 
=
 
0
;


 
 
c
o
n
s
t
 
m
k
I
d
 
=
 
(
)
 
=
>
 
`
r
$
{
c
o
u
n
t
e
r
+
+
}
`
;




 
 
f
u
n
c
t
i
o
n
 
s
n
a
p
(
m
s
g
:
 
s
t
r
i
n
g
,
 
l
i
n
e
:
 
n
u
m
b
e
r
,
 
a
c
t
i
v
e
I
d
?
:
 
s
t
r
i
n
g
)
 
{


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
,
 
v
a
r
s
:
 
{
 
n
o
d
e
s
:
 
O
b
j
e
c
t
.
k
e
y
s
(
n
o
d
e
s
)
.
l
e
n
g
t
h
,
 
r
o
o
t
:
 
r
o
o
t
I
d
 
?
?
 
"
-
"
 
}
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
 
n
o
d
e
s
:
 
c
l
o
n
e
R
B
(
n
o
d
e
s
)
,
 
r
o
o
t
I
d
,
 
a
c
t
i
v
e
I
d
 
}
)
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
 
r
o
t
a
t
e
L
e
f
t
(
x
I
d
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
 
x
 
=
 
n
o
d
e
s
[
x
I
d
]
;
 
c
o
n
s
t
 
y
I
d
 
=
 
x
.
r
i
g
h
t
!
;
 
c
o
n
s
t
 
y
 
=
 
n
o
d
e
s
[
y
I
d
]
;


 
 
 
 
x
.
r
i
g
h
t
 
=
 
y
.
l
e
f
t
;


 
 
 
 
i
f
 
(
y
.
l
e
f
t
)
 
n
o
d
e
s
[
y
.
l
e
f
t
]
.
p
a
r
e
n
t
 
=
 
x
I
d
;


 
 
 
 
y
.
p
a
r
e
n
t
 
=
 
x
.
p
a
r
e
n
t
;


 
 
 
 
i
f
 
(
!
x
.
p
a
r
e
n
t
)
 
r
o
o
t
I
d
 
=
 
y
I
d
;


 
 
 
 
e
l
s
e
 
{
 
c
o
n
s
t
 
p
 
=
 
n
o
d
e
s
[
x
.
p
a
r
e
n
t
]
;
 
i
f
 
(
p
.
l
e
f
t
 
=
=
=
 
x
I
d
)
 
p
.
l
e
f
t
 
=
 
y
I
d
;
 
e
l
s
e
 
p
.
r
i
g
h
t
 
=
 
y
I
d
;
 
}


 
 
 
 
y
.
l
e
f
t
 
=
 
x
I
d
;
 
x
.
p
a
r
e
n
t
 
=
 
y
I
d
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
 
r
o
t
a
t
e
R
i
g
h
t
(
x
I
d
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
 
x
 
=
 
n
o
d
e
s
[
x
I
d
]
;
 
c
o
n
s
t
 
y
I
d
 
=
 
x
.
l
e
f
t
!
;
 
c
o
n
s
t
 
y
 
=
 
n
o
d
e
s
[
y
I
d
]
;


 
 
 
 
x
.
l
e
f
t
 
=
 
y
.
r
i
g
h
t
;


 
 
 
 
i
f
 
(
y
.
r
i
g
h
t
)
 
n
o
d
e
s
[
y
.
r
i
g
h
t
]
.
p
a
r
e
n
t
 
=
 
x
I
d
;


 
 
 
 
y
.
p
a
r
e
n
t
 
=
 
x
.
p
a
r
e
n
t
;


 
 
 
 
i
f
 
(
!
x
.
p
a
r
e
n
t
)
 
r
o
o
t
I
d
 
=
 
y
I
d
;


 
 
 
 
e
l
s
e
 
{
 
c
o
n
s
t
 
p
 
=
 
n
o
d
e
s
[
x
.
p
a
r
e
n
t
]
;
 
i
f
 
(
p
.
l
e
f
t
 
=
=
=
 
x
I
d
)
 
p
.
l
e
f
t
 
=
 
y
I
d
;
 
e
l
s
e
 
p
.
r
i
g
h
t
 
=
 
y
I
d
;
 
}


 
 
 
 
y
.
r
i
g
h
t
 
=
 
x
I
d
;
 
x
.
p
a
r
e
n
t
 
=
 
y
I
d
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
i
x
U
p
(
z
I
d
:
 
s
t
r
i
n
g
)
 
{


 
 
 
 
w
h
i
l
e
 
(
z
I
d
 
&
&
 
n
o
d
e
s
[
z
I
d
]
.
p
a
r
e
n
t
 
&
&
 
n
o
d
e
s
[
n
o
d
e
s
[
z
I
d
]
.
p
a
r
e
n
t
!
]
.
c
o
l
o
r
 
=
=
=
 
"
R
"
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
p
I
d
 
=
 
n
o
d
e
s
[
z
I
d
]
.
p
a
r
e
n
t
!
;


 
 
 
 
 
 
c
o
n
s
t
 
g
I
d
 
=
 
n
o
d
e
s
[
p
I
d
]
.
p
a
r
e
n
t
!
;


 
 
 
 
 
 
i
f
 
(
!
g
I
d
)
 
b
r
e
a
k
;


 
 
 
 
 
 
c
o
n
s
t
 
g
 
=
 
n
o
d
e
s
[
g
I
d
]
;


 
 
 
 
 
 
i
f
 
(
p
I
d
 
=
=
=
 
g
.
l
e
f
t
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
u
n
c
l
e
I
d
 
=
 
g
.
r
i
g
h
t
;


 
 
 
 
 
 
 
 
i
f
 
(
u
n
c
l
e
I
d
 
&
&
 
n
o
d
e
s
[
u
n
c
l
e
I
d
]
.
c
o
l
o
r
 
=
=
=
 
"
R
"
)
 
{


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
[
p
I
d
]
.
c
o
l
o
r
 
=
 
"
B
"
;
 
n
o
d
e
s
[
u
n
c
l
e
I
d
]
.
c
o
l
o
r
 
=
 
"
B
"
;
 
g
.
c
o
l
o
r
 
=
 
"
R
"
;


 
 
 
 
 
 
 
 
 
 
s
n
a
p
(
`
C
a
s
e
 
1
:
 
u
n
c
l
e
 
r
e
d
 
-
>
 
r
e
c
o
l
o
r
 
p
a
r
e
n
t
+
u
n
c
l
e
 
B
L
A
C
K
,
 
g
r
a
n
d
p
a
r
e
n
t
 
R
E
D
.
`
,
 
4
,
 
g
I
d
)
;


 
 
 
 
 
 
 
 
 
 
z
I
d
 
=
 
g
I
d
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
i
f
 
(
z
I
d
 
=
=
=
 
n
o
d
e
s
[
p
I
d
]
.
r
i
g
h
t
)
 
{
 
z
I
d
 
=
 
p
I
d
;
 
r
o
t
a
t
e
L
e
f
t
(
z
I
d
)
;
 
s
n
a
p
(
"
C
a
s
e
 
2
:
 
r
o
t
a
t
e
 
l
e
f
t
.
"
,
 
5
,
 
z
I
d
)
;
 
}


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
[
n
o
d
e
s
[
z
I
d
]
.
p
a
r
e
n
t
!
]
.
c
o
l
o
r
 
=
 
"
B
"
;


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
[
n
o
d
e
s
[
n
o
d
e
s
[
z
I
d
]
.
p
a
r
e
n
t
!
]
.
p
a
r
e
n
t
!
]
.
c
o
l
o
r
 
=
 
"
R
"
;


 
 
 
 
 
 
 
 
 
 
r
o
t
a
t
e
R
i
g
h
t
(
n
o
d
e
s
[
n
o
d
e
s
[
z
I
d
]
.
p
a
r
e
n
t
!
]
.
p
a
r
e
n
t
!
)
;


 
 
 
 
 
 
 
 
 
 
s
n
a
p
(
"
C
a
s
e
 
3
:
 
r
o
t
a
t
e
 
r
i
g
h
t
 
+
 
r
e
c
o
l
o
r
.
"
,
 
6
,
 
z
I
d
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
u
n
c
l
e
I
d
 
=
 
g
.
l
e
f
t
;


 
 
 
 
 
 
 
 
i
f
 
(
u
n
c
l
e
I
d
 
&
&
 
n
o
d
e
s
[
u
n
c
l
e
I
d
]
.
c
o
l
o
r
 
=
=
=
 
"
R
"
)
 
{


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
[
p
I
d
]
.
c
o
l
o
r
 
=
 
"
B
"
;
 
n
o
d
e
s
[
u
n
c
l
e
I
d
]
.
c
o
l
o
r
 
=
 
"
B
"
;
 
g
.
c
o
l
o
r
 
=
 
"
R
"
;


 
 
 
 
 
 
 
 
 
 
s
n
a
p
(
`
C
a
s
e
 
1
 
(
m
i
r
r
o
r
)
:
 
r
e
c
o
l
o
r
.
`
,
 
4
,
 
g
I
d
)
;


 
 
 
 
 
 
 
 
 
 
z
I
d
 
=
 
g
I
d
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
i
f
 
(
z
I
d
 
=
=
=
 
n
o
d
e
s
[
p
I
d
]
.
l
e
f
t
)
 
{
 
z
I
d
 
=
 
p
I
d
;
 
r
o
t
a
t
e
R
i
g
h
t
(
z
I
d
)
;
 
s
n
a
p
(
"
C
a
s
e
 
2
 
(
m
i
r
r
o
r
)
:
 
r
o
t
a
t
e
 
r
i
g
h
t
.
"
,
 
5
,
 
z
I
d
)
;
 
}


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
[
n
o
d
e
s
[
z
I
d
]
.
p
a
r
e
n
t
!
]
.
c
o
l
o
r
 
=
 
"
B
"
;


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
[
n
o
d
e
s
[
n
o
d
e
s
[
z
I
d
]
.
p
a
r
e
n
t
!
]
.
p
a
r
e
n
t
!
]
.
c
o
l
o
r
 
=
 
"
R
"
;


 
 
 
 
 
 
 
 
 
 
r
o
t
a
t
e
L
e
f
t
(
n
o
d
e
s
[
n
o
d
e
s
[
z
I
d
]
.
p
a
r
e
n
t
!
]
.
p
a
r
e
n
t
!
)
;


 
 
 
 
 
 
 
 
 
 
s
n
a
p
(
"
C
a
s
e
 
3
 
(
m
i
r
r
o
r
)
:
 
r
o
t
a
t
e
 
l
e
f
t
 
+
 
r
e
c
o
l
o
r
.
"
,
 
6
,
 
z
I
d
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
i
f
 
(
r
o
o
t
I
d
)
 
n
o
d
e
s
[
r
o
o
t
I
d
]
.
c
o
l
o
r
 
=
 
"
B
"
;


 
 
}




 
 
s
n
a
p
(
"
E
m
p
t
y
 
R
B
-
T
r
e
e
.
"
,
 
0
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
k
e
y
 
o
f
 
k
e
y
s
)
 
{


 
 
 
 
c
o
n
s
t
 
i
d
 
=
 
m
k
I
d
(
)
;


 
 
 
 
n
o
d
e
s
[
i
d
]
 
=
 
{
 
i
d
,
 
k
e
y
,
 
c
o
l
o
r
:
 
"
R
"
 
}
;


 
 
 
 
i
f
 
(
!
r
o
o
t
I
d
)
 
{


 
 
 
 
 
 
r
o
o
t
I
d
 
=
 
i
d
;
 
n
o
d
e
s
[
i
d
]
.
c
o
l
o
r
 
=
 
"
B
"
;


 
 
 
 
 
 
s
n
a
p
(
`
I
n
s
e
r
t
 
$
{
k
e
y
}
 
-
 
r
o
o
t
,
 
c
o
l
o
r
e
d
 
B
L
A
C
K
.
`
,
 
2
,
 
i
d
)
;


 
 
 
 
 
 
c
o
n
t
i
n
u
e
;


 
 
 
 
}


 
 
 
 
l
e
t
 
c
u
r
 
=
 
r
o
o
t
I
d
;


 
 
 
 
w
h
i
l
e
 
(
t
r
u
e
)
 
{


 
 
 
 
 
 
i
f
 
(
k
e
y
 
<
 
n
o
d
e
s
[
c
u
r
]
.
k
e
y
)
 
{


 
 
 
 
 
 
 
 
i
f
 
(
!
n
o
d
e
s
[
c
u
r
]
.
l
e
f
t
)
 
{
 
n
o
d
e
s
[
c
u
r
]
.
l
e
f
t
 
=
 
i
d
;
 
n
o
d
e
s
[
i
d
]
.
p
a
r
e
n
t
 
=
 
c
u
r
;
 
b
r
e
a
k
;
 
}


 
 
 
 
 
 
 
 
c
u
r
 
=
 
n
o
d
e
s
[
c
u
r
]
.
l
e
f
t
!
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
i
f
 
(
!
n
o
d
e
s
[
c
u
r
]
.
r
i
g
h
t
)
 
{
 
n
o
d
e
s
[
c
u
r
]
.
r
i
g
h
t
 
=
 
i
d
;
 
n
o
d
e
s
[
i
d
]
.
p
a
r
e
n
t
 
=
 
c
u
r
;
 
b
r
e
a
k
;
 
}


 
 
 
 
 
 
 
 
c
u
r
 
=
 
n
o
d
e
s
[
c
u
r
]
.
r
i
g
h
t
!
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
s
n
a
p
(
`
I
n
s
e
r
t
 
$
{
k
e
y
}
 
(
R
E
D
)
 
a
s
 
c
h
i
l
d
 
o
f
 
$
{
n
o
d
e
s
[
n
o
d
e
s
[
i
d
]
.
p
a
r
e
n
t
!
]
.
k
e
y
}
.
`
,
 
2
,
 
i
d
)
;


 
 
 
 
f
i
x
U
p
(
i
d
)
;


 
 
 
 
s
n
a
p
(
"
F
i
x
-
u
p
 
c
o
m
p
l
e
t
e
.
"
,
 
7
)
;


 
 
}


 
 
r
e
t
u
r
n
 
f
r
a
m
e
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
 
R
B
T
r
e
e
V
i
z
(
{
 
f
r
a
m
e
 
}
:
 
{
 
f
r
a
m
e
:
 
R
B
F
r
a
m
e
 
}
)
 
{


 
 
c
o
n
s
t
 
x
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
n
u
m
b
e
r
>
 
=
 
{
}
;
 
c
o
n
s
t
 
y
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
n
u
m
b
e
r
>
 
=
 
{
}
;


 
 
l
e
t
 
c
 
=
 
0
;


 
 
f
u
n
c
t
i
o
n
 
w
a
l
k
(
i
d
:
 
s
t
r
i
n
g
 
|
 
u
n
d
e
f
i
n
e
d
,
 
d
e
p
t
h
:
 
n
u
m
b
e
r
)
 
{


 
 
 
 
i
f
 
(
!
i
d
)
 
r
e
t
u
r
n
;


 
 
 
 
w
a
l
k
(
f
r
a
m
e
.
n
o
d
e
s
[
i
d
]
.
l
e
f
t
,
 
d
e
p
t
h
 
+
 
1
)
;


 
 
 
 
x
[
i
d
]
 
=
 
c
+
+
;
 
y
[
i
d
]
 
=
 
d
e
p
t
h
;


 
 
 
 
w
a
l
k
(
f
r
a
m
e
.
n
o
d
e
s
[
i
d
]
.
r
i
g
h
t
,
 
d
e
p
t
h
 
+
 
1
)
;


 
 
}


 
 
w
a
l
k
(
f
r
a
m
e
.
r
o
o
t
I
d
,
 
0
)
;


 
 
c
o
n
s
t
 
n
 
=
 
c
;


 
 
c
o
n
s
t
 
W
 
=
 
5
6
0
,
 
H
 
=
 
2
8
0
;


 
 
c
o
n
s
t
 
x
S
c
a
l
e
 
=
 
n
 
>
 
1
 
?
 
(
W
 
-
 
6
0
)
 
/
 
(
n
 
-
 
1
)
 
:
 
0
;


 
 
c
o
n
s
t
 
m
a
x
D
 
=
 
M
a
t
h
.
m
a
x
(
0
,
 
.
.
.
O
b
j
e
c
t
.
v
a
l
u
e
s
(
y
)
)
;


 
 
c
o
n
s
t
 
y
S
c
a
l
e
 
=
 
m
a
x
D
 
>
 
0
 
?
 
(
H
 
-
 
6
0
)
 
/
 
m
a
x
D
 
:
 
0
;


 
 
c
o
n
s
t
 
i
d
s
 
=
 
O
b
j
e
c
t
.
k
e
y
s
(
f
r
a
m
e
.
n
o
d
e
s
)
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
s
v
g
 
v
i
e
w
B
o
x
=
{
`
0
 
0
 
$
{
W
}
 
$
{
H
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
w
-
f
u
l
l
 
h
-
a
u
t
o
"
 
s
t
y
l
e
=
{
{
 
m
a
x
H
e
i
g
h
t
:
 
H
 
}
}
>


 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
o
d
e
 
=
 
f
r
a
m
e
.
n
o
d
e
s
[
i
d
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
X
 
=
 
3
0
 
+
 
x
[
i
d
]
 
*
 
x
S
c
a
l
e
,
 
Y
 
=
 
3
0
 
+
 
y
[
i
d
]
 
*
 
y
S
c
a
l
e
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
h
i
l
d
r
e
n
 
=
 
[
n
o
d
e
.
l
e
f
t
,
 
n
o
d
e
.
r
i
g
h
t
]
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
 
a
s
 
s
t
r
i
n
g
[
]
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
c
h
i
l
d
r
e
n
.
m
a
p
(
(
c
i
d
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
k
e
y
=
{
`
$
{
i
d
}
-
$
{
c
i
d
}
`
}
 
x
1
=
{
X
}
 
y
1
=
{
Y
}
 
x
2
=
{
3
0
 
+
 
x
[
c
i
d
]
 
*
 
x
S
c
a
l
e
}
 
y
2
=
{
3
0
 
+
 
y
[
c
i
d
]
 
*
 
y
S
c
a
l
e
}
 
s
t
r
o
k
e
=
"
#
9
4
a
3
b
8
"
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
8
}
 
/
>


 
 
 
 
 
 
 
 
)
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
o
d
e
 
=
 
f
r
a
m
e
.
n
o
d
e
s
[
i
d
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
X
 
=
 
3
0
 
+
 
x
[
i
d
]
 
*
 
x
S
c
a
l
e
,
 
Y
 
=
 
3
0
 
+
 
y
[
i
d
]
 
*
 
y
S
c
a
l
e
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
c
t
i
v
e
 
=
 
i
d
 
=
=
=
 
f
r
a
m
e
.
a
c
t
i
v
e
I
d
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
i
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e
 
c
x
=
{
X
}
 
c
y
=
{
Y
}
 
r
=
{
1
6
}
 
f
i
l
l
=
{
n
o
d
e
.
c
o
l
o
r
 
=
=
=
 
"
R
"
 
?
 
"
#
e
f
4
4
4
4
"
 
:
 
"
#
1
f
2
9
3
7
"
}
 
s
t
r
o
k
e
=
{
i
s
A
c
t
i
v
e
 
?
 
T
H
E
M
E
.
a
c
c
e
n
t
 
:
 
"
#
f
f
f
"
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
i
s
A
c
t
i
v
e
 
?
 
4
 
:
 
2
.
5
}
 
s
t
y
l
e
=
{
{
 
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
:
 
"
f
i
l
l
 
0
.
3
s
,
 
s
t
r
o
k
e
 
0
.
2
s
"
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
X
}
 
y
=
{
Y
 
+
 
4
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
o
n
t
S
i
z
e
=
{
1
3
}
 
f
o
n
t
W
e
i
g
h
t
=
{
7
0
0
}
 
f
i
l
l
=
"
#
f
f
f
"
 
f
o
n
t
F
a
m
i
l
y
=
"
u
i
-
m
o
n
o
s
p
a
c
e
,
 
m
o
n
o
s
p
a
c
e
"
>
{
n
o
d
e
.
k
e
y
}
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
s
v
g
>


 
 
)
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
 
R
B
T
r
e
e
V
i
s
u
a
l
i
z
e
r
(
)
 
{


 
 
c
o
n
s
t
 
[
s
r
c
,
 
s
e
t
S
r
c
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
1
0
,
 
2
0
,
 
3
0
,
 
1
5
,
 
2
5
,
 
5
,
 
3
5
"
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
b
u
i
l
d
R
B
F
r
a
m
e
s
(
p
a
r
s
e
I
n
t
s
(
s
r
c
,
 
1
2
)
 
?
?
 
[
1
0
,
 
2
0
,
 
3
0
,
 
1
5
,
 
2
5
,
 
5
,
 
3
5
]
)
,
 
[
s
r
c
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
"
R
e
d
-
B
l
a
c
k
 
T
r
e
e
 
I
n
s
e
r
t
i
o
n
"


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
K
e
y
s
 
(
c
o
m
m
a
-
s
e
p
a
r
a
t
e
d
)
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
r
c
}


 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
l
a
s
s
i
c
"
,
 
v
a
l
u
e
:
 
"
1
0
,
 
2
0
,
 
3
0
,
 
1
5
,
 
2
5
,
 
5
,
 
3
5
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
A
s
c
e
n
d
i
n
g
"
,
 
v
a
l
u
e
:
 
"
1
,
 
2
,
 
3
,
 
4
,
 
5
,
 
6
,
 
7
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
M
i
x
e
d
"
,
 
v
a
l
u
e
:
 
"
7
,
 
3
,
 
1
8
,
 
1
0
,
 
2
2
,
 
8
,
 
1
1
,
 
2
6
"
 
}
,


 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{
 
i
f
 
(
p
a
r
s
e
I
n
t
s
(
v
,
 
1
2
)
)
 
s
e
t
S
r
c
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
P
S
E
U
D
O
_
R
B
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
/
>
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
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
.
5
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
 
g
a
p
-
3
.
5
 
t
e
x
t
-
x
s
 
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
1
.
5
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
3
 
h
-
3
 
r
o
u
n
d
e
d
-
s
m
 
b
g
-
r
e
d
-
5
0
0
"
 
/
>
R
E
D
<
/
s
p
a
n
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
1
.
5
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
3
 
h
-
3
 
r
o
u
n
d
e
d
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
9
0
0
"
 
/
>
B
L
A
C
K
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


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
R
B
T
r
e
e
V
i
z
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
/
>
}


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
{
f
r
a
m
e
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
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
.
"
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
S
K
I
P
 
L
I
S
T
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




i
n
t
e
r
f
a
c
e
 
S
L
F
r
a
m
e
 
e
x
t
e
n
d
s
 
B
a
s
e
F
r
a
m
e
 
{


 
 
l
a
y
e
r
s
:
 
n
u
m
b
e
r
[
]
[
]
;


 
 
h
i
g
h
l
i
g
h
t
e
d
P
a
t
h
:
 
{
 
l
a
y
e
r
:
 
n
u
m
b
e
r
;
 
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
 
}
[
]
;


 
 
t
a
r
g
e
t
K
e
y
?
:
 
n
u
m
b
e
r
;


 
 
f
o
u
n
d
?
:
 
b
o
o
l
e
a
n
;


 
 
p
r
o
m
o
t
i
o
n
L
o
g
?
:
 
{
 
v
a
l
u
e
:
 
n
u
m
b
e
r
;
 
h
e
i
g
h
t
:
 
n
u
m
b
e
r
;
 
f
l
i
p
s
:
 
n
u
m
b
e
r
 
}
[
]
;


}




c
o
n
s
t
 
P
S
E
U
D
O
_
S
L
 
=
 
[


 
 
"
#
 
S
k
i
p
 
L
i
s
t
 
-
 
r
a
n
d
o
m
i
z
e
d
 
l
e
v
e
l
s
 
(
g
e
o
m
e
t
r
i
c
,
 
p
=
0
.
5
)
"
,


 
 
"
f
u
n
c
t
i
o
n
 
i
n
s
e
r
t
(
k
e
y
)
:
"
,


 
 
"
 
 
l
v
l
 
<
-
 
0
"
,


 
 
"
 
 
w
h
i
l
e
 
r
a
n
d
o
m
(
)
 
<
 
p
 
a
n
d
 
l
v
l
 
<
 
m
a
x
L
e
v
e
l
:
 
l
v
l
+
+
"
,


 
 
"
 
 
s
p
l
i
c
e
 
k
e
y
 
i
n
t
o
 
a
l
l
 
l
e
v
e
l
s
 
0
.
.
l
v
l
"
,


 
 
"
f
u
n
c
t
i
o
n
 
s
e
a
r
c
h
(
k
e
y
)
:
"
,


 
 
"
 
 
x
 
<
-
 
t
o
p
 
l
e
v
e
l
,
 
l
e
f
t
m
o
s
t
"
,


 
 
"
 
 
w
h
i
l
e
 
l
e
v
e
l
 
>
=
 
0
:
"
,


 
 
"
 
 
 
 
w
h
i
l
e
 
n
e
x
t
(
x
)
.
k
e
y
 
<
=
 
k
e
y
:
 
x
 
<
-
 
n
e
x
t
(
x
)
"
,


 
 
"
 
 
 
 
i
f
 
x
.
k
e
y
 
=
 
k
e
y
:
 
r
e
t
u
r
n
 
x
"
,


 
 
"
 
 
 
 
d
e
s
c
e
n
d
 
o
n
e
 
l
e
v
e
l
"
,


 
 
"
 
 
r
e
t
u
r
n
 
N
O
T
 
F
O
U
N
D
"
,


]
;




f
u
n
c
t
i
o
n
 
m
u
l
b
e
r
r
y
3
2
(
s
e
e
d
:
 
n
u
m
b
e
r
)
:
 
(
)
 
=
>
 
n
u
m
b
e
r
 
{


 
 
l
e
t
 
s
 
=
 
s
e
e
d
 
>
>
>
 
0
;


 
 
r
e
t
u
r
n
 
f
u
n
c
t
i
o
n
 
(
)
 
{


 
 
 
 
s
 
=
 
(
s
 
+
 
0
x
6
d
2
b
7
9
f
5
)
 
>
>
>
 
0
;


 
 
 
 
l
e
t
 
t
 
=
 
M
a
t
h
.
i
m
u
l
(
s
 
^
 
(
s
 
>
>
>
 
1
5
)
,
 
1
 
|
 
s
)
;


 
 
 
 
t
 
=
 
(
t
 
+
 
M
a
t
h
.
i
m
u
l
(
t
 
^
 
(
t
 
>
>
>
 
7
)
,
 
6
1
 
|
 
t
)
)
 
^
 
t
;


 
 
 
 
r
e
t
u
r
n
 
(
(
t
 
^
 
(
t
 
>
>
>
 
1
4
)
)
 
>
>
>
 
0
)
 
/
 
4
2
9
4
9
6
7
2
9
6
;


 
 
}
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
 
b
u
i
l
d
S
k
i
p
L
i
s
t
R
a
n
d
o
m
(
v
a
l
u
e
s
:
 
n
u
m
b
e
r
[
]
,
 
s
e
e
d
:
 
n
u
m
b
e
r
,
 
p
 
=
 
0
.
5
,
 
m
a
x
L
 
=
 
4
)
 
{


 
 
c
o
n
s
t
 
s
o
r
t
e
d
 
=
 
[
.
.
.
v
a
l
u
e
s
]
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
a
 
-
 
b
)
;


 
 
c
o
n
s
t
 
r
n
g
 
=
 
m
u
l
b
e
r
r
y
3
2
(
s
e
e
d
)
;


 
 
c
o
n
s
t
 
h
e
i
g
h
t
O
f
 
=
 
n
e
w
 
M
a
p
<
n
u
m
b
e
r
,
 
n
u
m
b
e
r
>
(
)
;


 
 
c
o
n
s
t
 
p
r
o
m
o
t
i
o
n
L
o
g
:
 
{
 
v
a
l
u
e
:
 
n
u
m
b
e
r
;
 
h
e
i
g
h
t
:
 
n
u
m
b
e
r
;
 
f
l
i
p
s
:
 
n
u
m
b
e
r
 
}
[
]
 
=
 
[
]
;


 
 
f
o
r
 
(
c
o
n
s
t
 
v
 
o
f
 
s
o
r
t
e
d
)
 
{


 
 
 
 
l
e
t
 
l
v
l
 
=
 
0
;
 
l
e
t
 
f
l
i
p
s
 
=
 
0
;


 
 
 
 
w
h
i
l
e
 
(
l
v
l
 
<
 
m
a
x
L
 
-
 
1
)
 
{
 
f
l
i
p
s
+
+
;
 
i
f
 
(
r
n
g
(
)
 
<
 
p
)
 
l
v
l
+
+
;
 
e
l
s
e
 
b
r
e
a
k
;
 
}


 
 
 
 
h
e
i
g
h
t
O
f
.
s
e
t
(
v
,
 
l
v
l
)
;


 
 
 
 
p
r
o
m
o
t
i
o
n
L
o
g
.
p
u
s
h
(
{
 
v
a
l
u
e
:
 
v
,
 
h
e
i
g
h
t
:
 
l
v
l
,
 
f
l
i
p
s
 
}
)
;


 
 
}


 
 
l
e
t
 
t
o
p
L
e
v
e
l
 
=
 
0
;


 
 
f
o
r
 
(
c
o
n
s
t
 
h
 
o
f
 
h
e
i
g
h
t
O
f
.
v
a
l
u
e
s
(
)
)
 
i
f
 
(
h
 
>
 
t
o
p
L
e
v
e
l
)
 
t
o
p
L
e
v
e
l
 
=
 
h
;


 
 
c
o
n
s
t
 
l
a
y
e
r
s
:
 
n
u
m
b
e
r
[
]
[
]
 
=
 
[
]
;


 
 
f
o
r
 
(
l
e
t
 
L
 
=
 
t
o
p
L
e
v
e
l
;
 
L
 
>
=
 
0
;
 
L
-
-
)
 
{


 
 
 
 
l
a
y
e
r
s
.
p
u
s
h
(
s
o
r
t
e
d
.
f
i
l
t
e
r
(
(
v
)
 
=
>
 
(
h
e
i
g
h
t
O
f
.
g
e
t
(
v
)
 
?
?
 
0
)
 
>
=
 
L
)
)
;


 
 
}


 
 
i
f
 
(
l
a
y
e
r
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
)
 
l
a
y
e
r
s
.
p
u
s
h
(
[
]
)
;


 
 
r
e
t
u
r
n
 
{
 
l
a
y
e
r
s
,
 
p
r
o
m
o
t
i
o
n
L
o
g
 
}
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
 
b
u
i
l
d
S
L
F
r
a
m
e
s
(
v
a
l
u
e
s
:
 
n
u
m
b
e
r
[
]
,
 
t
a
r
g
e
t
:
 
n
u
m
b
e
r
,
 
s
e
e
d
:
 
n
u
m
b
e
r
)
:
 
S
L
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
{
 
l
a
y
e
r
s
,
 
p
r
o
m
o
t
i
o
n
L
o
g
 
}
 
=
 
b
u
i
l
d
S
k
i
p
L
i
s
t
R
a
n
d
o
m
(
v
a
l
u
e
s
,
 
s
e
e
d
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
S
L
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
i
f
 
(
l
a
y
e
r
s
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
 
=
=
=
 
0
)
 
{


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
5
,
 
v
a
r
s
:
 
{
 
t
a
r
g
e
t
,
 
l
a
y
e
r
s
:
 
l
a
y
e
r
s
.
l
e
n
g
t
h
 
}
,
 
m
e
s
s
a
g
e
:
 
`
E
m
p
t
y
 
s
k
i
p
 
l
i
s
t
.
`
,
 
l
a
y
e
r
s
,
 
h
i
g
h
l
i
g
h
t
e
d
P
a
t
h
:
 
[
]
,
 
t
a
r
g
e
t
K
e
y
:
 
t
a
r
g
e
t
,
 
f
o
u
n
d
:
 
f
a
l
s
e
,
 
p
r
o
m
o
t
i
o
n
L
o
g
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


 
 
}


 
 
f
o
r
 
(
c
o
n
s
t
 
p
 
o
f
 
p
r
o
m
o
t
i
o
n
L
o
g
)
 
{


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
v
a
l
u
e
:
 
p
.
v
a
l
u
e
,
 
f
l
i
p
s
:
 
p
.
f
l
i
p
s
,
 
h
e
i
g
h
t
:
 
p
.
h
e
i
g
h
t
 
}
,
 
m
e
s
s
a
g
e
:
 
`
I
n
s
e
r
t
 
$
{
p
.
v
a
l
u
e
}
:
 
$
{
p
.
f
l
i
p
s
}
 
c
o
i
n
 
f
l
i
p
$
{
p
.
f
l
i
p
s
 
=
=
=
 
1
 
?
 
"
"
 
:
 
"
s
"
}
 
-
>
 
t
o
w
e
r
 
h
e
i
g
h
t
 
$
{
p
.
h
e
i
g
h
t
}
.
`
,
 
l
a
y
e
r
s
,
 
h
i
g
h
l
i
g
h
t
e
d
P
a
t
h
:
 
[
]
,
 
t
a
r
g
e
t
K
e
y
:
 
t
a
r
g
e
t
,
 
p
r
o
m
o
t
i
o
n
L
o
g
 
}
)
;


 
 
}


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
5
,
 
v
a
r
s
:
 
{
 
t
a
r
g
e
t
,
 
l
a
y
e
r
s
:
 
l
a
y
e
r
s
.
l
e
n
g
t
h
 
}
,
 
m
e
s
s
a
g
e
:
 
`
S
e
a
r
c
h
 
$
{
t
a
r
g
e
t
}
:
 
s
t
a
r
t
 
a
t
 
t
o
p
-
l
e
v
e
l
,
 
l
e
f
t
m
o
s
t
.
`
,
 
l
a
y
e
r
s
,
 
h
i
g
h
l
i
g
h
t
e
d
P
a
t
h
:
 
[
{
 
l
a
y
e
r
:
 
0
,
 
i
d
x
:
 
0
 
}
]
,
 
t
a
r
g
e
t
K
e
y
:
 
t
a
r
g
e
t
,
 
p
r
o
m
o
t
i
o
n
L
o
g
 
}
)
;


 
 
l
e
t
 
c
u
r
L
a
y
e
r
 
=
 
0
,
 
c
u
r
I
d
x
 
=
 
0
;


 
 
c
o
n
s
t
 
p
a
t
h
:
 
{
 
l
a
y
e
r
:
 
n
u
m
b
e
r
;
 
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
 
}
[
]
 
=
 
[
{
 
l
a
y
e
r
:
 
0
,
 
i
d
x
:
 
0
 
}
]
;


 
 
w
h
i
l
e
 
(
c
u
r
L
a
y
e
r
 
<
 
l
a
y
e
r
s
.
l
e
n
g
t
h
)
 
{


 
 
 
 
w
h
i
l
e
 
(
c
u
r
I
d
x
 
+
 
1
 
<
 
l
a
y
e
r
s
[
c
u
r
L
a
y
e
r
]
.
l
e
n
g
t
h
 
&
&
 
l
a
y
e
r
s
[
c
u
r
L
a
y
e
r
]
[
c
u
r
I
d
x
 
+
 
1
]
 
<
=
 
t
a
r
g
e
t
)
 
{


 
 
 
 
 
 
c
u
r
I
d
x
+
+
;


 
 
 
 
 
 
p
a
t
h
.
p
u
s
h
(
{
 
l
a
y
e
r
:
 
c
u
r
L
a
y
e
r
,
 
i
d
x
:
 
c
u
r
I
d
x
 
}
)
;


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
7
,
 
v
a
r
s
:
 
{
 
l
a
y
e
r
:
 
c
u
r
L
a
y
e
r
,
 
a
t
:
 
l
a
y
e
r
s
[
c
u
r
L
a
y
e
r
]
[
c
u
r
I
d
x
]
 
}
,
 
m
e
s
s
a
g
e
:
 
`
S
t
e
p
 
r
i
g
h
t
 
o
n
 
l
a
y
e
r
 
$
{
c
u
r
L
a
y
e
r
}
 
-
>
 
$
{
l
a
y
e
r
s
[
c
u
r
L
a
y
e
r
]
[
c
u
r
I
d
x
]
}
.
`
,
 
l
a
y
e
r
s
,
 
h
i
g
h
l
i
g
h
t
e
d
P
a
t
h
:
 
[
.
.
.
p
a
t
h
]
,
 
t
a
r
g
e
t
K
e
y
:
 
t
a
r
g
e
t
,
 
p
r
o
m
o
t
i
o
n
L
o
g
 
}
)
;


 
 
 
 
}


 
 
 
 
i
f
 
(
l
a
y
e
r
s
[
c
u
r
L
a
y
e
r
]
[
c
u
r
I
d
x
]
 
=
=
=
 
t
a
r
g
e
t
)
 
{


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
8
,
 
v
a
r
s
:
 
{
 
t
a
r
g
e
t
,
 
f
o
u
n
d
:
 
"
y
e
s
"
 
}
,
 
m
e
s
s
a
g
e
:
 
`
F
o
u
n
d
 
$
{
t
a
r
g
e
t
}
 
a
t
 
l
a
y
e
r
 
$
{
c
u
r
L
a
y
e
r
}
.
`
,
 
l
a
y
e
r
s
,
 
h
i
g
h
l
i
g
h
t
e
d
P
a
t
h
:
 
[
.
.
.
p
a
t
h
]
,
 
t
a
r
g
e
t
K
e
y
:
 
t
a
r
g
e
t
,
 
f
o
u
n
d
:
 
t
r
u
e
,
 
p
r
o
m
o
t
i
o
n
L
o
g
 
}
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


 
 
 
 
}


 
 
 
 
i
f
 
(
c
u
r
L
a
y
e
r
 
+
 
1
 
<
 
l
a
y
e
r
s
.
l
e
n
g
t
h
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
c
u
r
 
=
 
l
a
y
e
r
s
[
c
u
r
L
a
y
e
r
]
[
c
u
r
I
d
x
]
;


 
 
 
 
 
 
c
o
n
s
t
 
b
e
l
o
w
 
=
 
l
a
y
e
r
s
[
c
u
r
L
a
y
e
r
 
+
 
1
]
;


 
 
 
 
 
 
l
e
t
 
n
e
w
I
d
x
 
=
 
0
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
 
b
e
l
o
w
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
 
i
f
 
(
b
e
l
o
w
[
i
]
 
<
=
 
c
u
r
)
 
n
e
w
I
d
x
 
=
 
i
;
 
e
l
s
e
 
b
r
e
a
k
;


 
 
 
 
 
 
c
u
r
L
a
y
e
r
+
+
;
 
c
u
r
I
d
x
 
=
 
n
e
w
I
d
x
;


 
 
 
 
 
 
p
a
t
h
.
p
u
s
h
(
{
 
l
a
y
e
r
:
 
c
u
r
L
a
y
e
r
,
 
i
d
x
:
 
c
u
r
I
d
x
 
}
)
;


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
9
,
 
v
a
r
s
:
 
{
 
l
a
y
e
r
:
 
c
u
r
L
a
y
e
r
,
 
a
t
:
 
l
a
y
e
r
s
[
c
u
r
L
a
y
e
r
]
[
c
u
r
I
d
x
]
 
}
,
 
m
e
s
s
a
g
e
:
 
`
D
e
s
c
e
n
d
 
t
o
 
l
a
y
e
r
 
$
{
c
u
r
L
a
y
e
r
}
.
`
,
 
l
a
y
e
r
s
,
 
h
i
g
h
l
i
g
h
t
e
d
P
a
t
h
:
 
[
.
.
.
p
a
t
h
]
,
 
t
a
r
g
e
t
K
e
y
:
 
t
a
r
g
e
t
,
 
p
r
o
m
o
t
i
o
n
L
o
g
 
}
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
0
,
 
v
a
r
s
:
 
{
 
t
a
r
g
e
t
,
 
f
o
u
n
d
:
 
"
n
o
"
 
}
,
 
m
e
s
s
a
g
e
:
 
`
N
o
t
 
f
o
u
n
d
.
`
,
 
l
a
y
e
r
s
,
 
h
i
g
h
l
i
g
h
t
e
d
P
a
t
h
:
 
[
.
.
.
p
a
t
h
]
,
 
t
a
r
g
e
t
K
e
y
:
 
t
a
r
g
e
t
,
 
f
o
u
n
d
:
 
f
a
l
s
e
,
 
p
r
o
m
o
t
i
o
n
L
o
g
 
}
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


 
 
 
 
}


 
 
}


 
 
r
e
t
u
r
n
 
f
r
a
m
e
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
 
S
k
i
p
L
i
s
t
V
i
z
(
{
 
f
r
a
m
e
 
}
:
 
{
 
f
r
a
m
e
:
 
S
L
F
r
a
m
e
 
}
)
 
{


 
 
c
o
n
s
t
 
c
e
l
l
 
=
 
4
0
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
 
g
a
p
-
1
"
>


 
 
 
 
 
 
{
f
r
a
m
e
.
l
a
y
e
r
s
.
m
a
p
(
(
l
v
,
 
l
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
{
l
i
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
w
-
1
4
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
b
o
l
d
 
u
p
p
e
r
c
a
s
e
 
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
4
0
0
 
f
o
n
t
-
s
a
n
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
L
{
f
r
a
m
e
.
l
a
y
e
r
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
 
-
 
l
i
}


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
 
g
a
p
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
l
v
.
m
a
p
(
(
v
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
i
s
i
t
e
d
 
=
 
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
e
d
P
a
t
h
.
s
o
m
e
(
(
p
)
 
=
>
 
p
.
l
a
y
e
r
 
=
=
=
 
l
i
 
&
&
 
p
.
i
d
x
 
=
=
=
 
i
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
a
s
t
 
=
 
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
e
d
P
a
t
h
[
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
e
d
P
a
t
h
.
l
e
n
g
t
h
 
-
 
1
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
F
i
n
a
l
 
=
 
f
r
a
m
e
.
f
o
u
n
d
 
&
&
 
f
r
a
m
e
.
t
a
r
g
e
t
K
e
y
 
=
=
=
 
v
 
&
&
 
l
a
s
t
?
.
l
a
y
e
r
 
=
=
=
 
l
i
 
&
&
 
l
a
s
t
?
.
i
d
x
 
=
=
=
 
i
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
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
 
f
o
n
t
-
m
o
n
o
 
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
m
 
r
o
u
n
d
e
d
 
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
a
l
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
c
e
l
l
,
 
h
e
i
g
h
t
:
 
3
2
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
i
s
F
i
n
a
l
 
?
 
`
2
p
x
 
s
o
l
i
d
 
$
{
T
H
E
M
E
.
s
u
c
c
e
s
s
}
`
 
:
 
v
i
s
i
t
e
d
 
?
 
`
2
p
x
 
s
o
l
i
d
 
$
{
T
H
E
M
E
.
a
c
c
e
n
t
}
`
 
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
T
H
E
M
E
.
b
o
r
d
e
r
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
i
s
F
i
n
a
l
 
?
 
`
$
{
T
H
E
M
E
.
s
u
c
c
e
s
s
}
1
4
`
 
:
 
v
i
s
i
t
e
d
 
?
 
`
$
{
T
H
E
M
E
.
a
c
c
e
n
t
}
1
0
`
 
:
 
T
H
E
M
E
.
b
g
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
T
H
E
M
E
.
t
e
x
t
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
x
S
h
a
d
o
w
:
 
v
i
s
i
t
e
d
 
?
 
`
0
 
0
 
0
 
2
p
x
 
$
{
T
H
E
M
E
.
a
c
c
e
n
t
}
2
6
`
 
:
 
"
n
o
n
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
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
d
i
v
>


 
 
 
 
 
 
)
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
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
 
S
k
i
p
L
i
s
t
V
i
s
u
a
l
i
z
e
r
(
)
 
{


 
 
c
o
n
s
t
 
[
s
r
c
,
 
s
e
t
S
r
c
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
1
,
3
,
5
,
7
,
9
,
1
1
,
1
3
,
1
5
 
|
 
1
1
"
)
;


 
 
c
o
n
s
t
 
[
s
e
e
d
,
 
s
e
t
S
e
e
d
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
7
)
;


 
 
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
 
=
 
s
r
c
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
*
\
|
\
s
*
/
)
;


 
 
c
o
n
s
t
 
v
a
l
u
e
s
 
=
 
p
a
r
t
s
[
0
]
 
?
 
p
a
r
t
s
[
0
]
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
)
.
m
a
p
(
N
u
m
b
e
r
)
.
f
i
l
t
e
r
(
(
x
)
 
=
>
 
!
N
u
m
b
e
r
.
i
s
N
a
N
(
x
)
)
 
:
 
[
]
;


 
 
c
o
n
s
t
 
t
a
r
g
e
t
 
=
 
p
a
r
t
s
[
1
]
 
?
 
N
u
m
b
e
r
(
p
a
r
t
s
[
1
]
)
 
:
 
1
1
;


 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
e
x
h
a
u
s
t
i
v
e
-
d
e
p
s


 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
b
u
i
l
d
S
L
F
r
a
m
e
s
(
v
a
l
u
e
s
.
l
e
n
g
t
h
 
?
 
v
a
l
u
e
s
 
:
 
[
1
,
 
3
,
 
5
,
 
7
,
 
9
,
 
1
1
,
 
1
3
,
 
1
5
]
,
 
N
u
m
b
e
r
.
i
s
F
i
n
i
t
e
(
t
a
r
g
e
t
)
 
?
 
t
a
r
g
e
t
 
:
 
1
1
,
 
s
e
e
d
)
,
 
[
s
r
c
,
 
s
e
e
d
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
"
S
k
i
p
 
L
i
s
t
 
-
 
R
a
n
d
o
m
i
z
e
d
 
L
e
v
e
l
s
 
(
g
e
o
m
e
t
r
i
c
,
 
p
=
0
.
5
)
"


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
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
 
g
a
p
-
2
.
5
 
f
l
e
x
-
w
r
a
p
 
i
t
e
m
s
-
e
n
d
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
-
1
 
m
i
n
-
w
-
6
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
S
o
r
t
e
d
 
v
a
l
u
e
s
 
|
 
t
a
r
g
e
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
r
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
E
a
c
h
 
v
a
l
u
e
 
g
e
t
s
 
a
 
r
a
n
d
o
m
 
t
o
w
e
r
 
h
e
i
g
h
t
 
b
y
 
r
e
p
e
a
t
e
d
 
c
o
i
n
 
f
l
i
p
s
 
(
p
=
0
.
5
)
.
 
R
e
-
r
o
l
l
 
t
h
e
 
s
e
e
d
 
t
o
 
s
e
e
 
t
h
e
 
s
t
r
u
c
t
u
r
e
 
c
h
a
n
g
e
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
F
i
n
d
 
1
1
"
,
 
v
a
l
u
e
:
 
"
1
,
3
,
5
,
7
,
9
,
1
1
,
1
3
,
1
5
 
|
 
1
1
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
F
i
n
d
 
2
"
,
 
v
a
l
u
e
:
 
"
2
,
4
,
6
,
8
,
1
0
,
1
2
,
1
4
,
1
6
 
|
 
2
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
N
o
t
 
f
o
u
n
d
"
,
 
v
a
l
u
e
:
 
"
1
,
3
,
5
,
7
,
9
,
1
1
 
|
 
8
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
S
p
a
r
s
e
"
,
 
v
a
l
u
e
:
 
"
1
,
2
,
3
,
4
,
5
 
|
 
4
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
s
e
t
S
r
c
(
v
)
}


 
 
 
 
 
 
 
 
 
 
 
 
/
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
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
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
5
0
0
 
m
b
-
1
"
>
R
N
G
 
s
e
e
d
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
 
g
a
p
-
1
.
5
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
n
u
m
b
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
e
e
d
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
S
e
e
d
(
N
u
m
b
e
r
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
 
|
|
 
0
)
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
1
6
 
p
x
-
2
 
p
y
-
1
.
5
 
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
 
f
o
n
t
-
m
o
n
o
 
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
s
t
o
n
e
-
5
0
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
S
e
e
d
(
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
1
0
0
0
)
)
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
p
x
-
3
 
p
y
-
1
.
5
 
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
b
o
l
d
 
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
s
t
o
n
e
-
9
0
0
 
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
s
t
o
n
e
-
4
0
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
h
o
v
e
r
:
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
4
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
3
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
-
r
o
l
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
P
S
E
U
D
O
_
S
L
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
/
>
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
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
.
5
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
g
r
i
d
 
g
a
p
-
3
.
5
 
i
t
e
m
s
-
s
t
a
r
t
"
 
s
t
y
l
e
=
{
{
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
m
i
n
m
a
x
(
0
,
1
f
r
)
 
2
0
0
p
x
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
S
k
i
p
L
i
s
t
V
i
z
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
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
[
1
0
p
x
]
 
f
o
n
t
-
b
o
l
d
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
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
5
0
0
 
m
b
-
2
"
>
T
o
w
e
r
 
h
e
i
g
h
t
s
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
{
!
f
r
a
m
e
?
.
p
r
o
m
o
t
i
o
n
L
o
g
 
|
|
 
f
r
a
m
e
.
p
r
o
m
o
t
i
o
n
L
o
g
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
 
?
 
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
x
s
 
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
4
0
0
 
i
t
a
l
i
c
"
>
e
m
p
t
y
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
p
r
o
m
o
t
i
o
n
L
o
g
.
m
a
p
(
(
p
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
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
p
x
-
2
 
p
y
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
m
d
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
x
s
 
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
b
e
t
w
e
e
n
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
b
a
c
k
g
r
o
u
n
d
:
 
"
r
g
b
a
(
6
,
1
8
2
,
2
1
2
,
0
.
0
8
)
"
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
6
,
1
8
2
,
2
1
2
,
0
.
2
5
)
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
f
o
n
t
-
b
o
l
d
"
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
T
H
E
M
E
.
t
e
x
t
 
}
}
>
{
p
.
v
a
l
u
e
}
<
/
s
p
a
n
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
t
o
n
e
-
4
0
0
"
>
h
=
{
p
.
h
e
i
g
h
t
}
 
(
{
p
.
f
l
i
p
s
}
 
f
l
i
p
{
p
.
f
l
i
p
s
 
=
=
=
 
1
 
?
 
"
"
 
:
 
"
s
"
}
)
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
m
t
-
1
.
5
 
p
t
-
1
.
5
 
t
e
x
t
-
[
1
0
p
x
]
 
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
4
0
0
 
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
 
s
t
y
l
e
=
{
{
 
b
o
r
d
e
r
T
o
p
:
 
`
1
p
x
 
d
a
s
h
e
d
 
$
{
T
H
E
M
E
.
b
o
r
d
e
r
}
`
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
E
x
p
e
c
t
e
d
 
t
o
t
a
l
 
n
o
d
e
s
 
~
2
n
.
 
E
x
p
e
c
t
e
d
 
m
a
x
 
l
e
v
e
l
 
~
l
o
g
(
n
)
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
/
C
a
r
d
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
{
f
r
a
m
e
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
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
.
"
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
B
L
O
O
M
 
F
I
L
T
E
R
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




i
n
t
e
r
f
a
c
e
 
B
l
o
o
m
F
r
a
m
e
 
e
x
t
e
n
d
s
 
B
a
s
e
F
r
a
m
e
 
{


 
 
b
i
t
s
:
 
n
u
m
b
e
r
[
]
;


 
 
h
i
g
h
l
i
g
h
t
B
i
t
s
:
 
n
u
m
b
e
r
[
]
;


 
 
o
p
:
 
"
i
n
s
e
r
t
"
 
|
 
"
q
u
e
r
y
"
;


 
 
i
t
e
m
:
 
s
t
r
i
n
g
;


 
 
v
e
r
d
i
c
t
?
:
 
"
p
r
o
b
a
b
l
y
 
y
e
s
"
 
|
 
"
d
e
f
i
n
i
t
e
l
y
 
n
o
"
 
|
 
"
i
n
s
e
r
t
e
d
"
;


}




c
o
n
s
t
 
P
S
E
U
D
O
_
B
L
 
=
 
[


 
 
"
#
 
B
l
o
o
m
 
F
i
l
t
e
r
"
,


 
 
"
f
u
n
c
t
i
o
n
 
i
n
s
e
r
t
(
i
t
e
m
)
:
"
,


 
 
"
 
 
f
o
r
 
e
a
c
h
 
h
a
s
h
 
h
_
k
:
"
,


 
 
"
 
 
 
 
b
i
t
s
[
h
_
k
(
i
t
e
m
)
 
%
 
m
]
 
=
 
1
"
,


 
 
"
f
u
n
c
t
i
o
n
 
q
u
e
r
y
(
i
t
e
m
)
:
"
,


 
 
"
 
 
f
o
r
 
e
a
c
h
 
h
a
s
h
 
h
_
k
:
"
,


 
 
"
 
 
 
 
i
f
 
b
i
t
s
[
h
_
k
(
i
t
e
m
)
 
%
 
m
]
 
=
 
0
:
 
r
e
t
u
r
n
 
'
d
e
f
i
n
i
t
e
l
y
 
N
O
'
"
,


 
 
"
 
 
r
e
t
u
r
n
 
'
p
r
o
b
a
b
l
y
 
Y
E
S
'
"
,


]
;




f
u
n
c
t
i
o
n
 
h
a
s
h
I
t
e
m
(
s
:
 
s
t
r
i
n
g
,
 
s
e
e
d
:
 
n
u
m
b
e
r
,
 
m
:
 
n
u
m
b
e
r
)
:
 
n
u
m
b
e
r
 
{


 
 
l
e
t
 
h
 
=
 
s
e
e
d
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
 
h
 
=
 
(
h
 
*
 
1
3
1
 
+
 
s
.
c
h
a
r
C
o
d
e
A
t
(
i
)
)
 
%
 
m
;


 
 
r
e
t
u
r
n
 
(
(
h
 
%
 
m
)
 
+
 
m
)
 
%
 
m
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
 
b
u
i
l
d
B
l
o
o
m
F
r
a
m
e
s
(
o
p
s
:
 
{
 
k
i
n
d
:
 
"
i
n
s
e
r
t
"
 
|
 
"
q
u
e
r
y
"
;
 
i
t
e
m
:
 
s
t
r
i
n
g
 
}
[
]
,
 
m
 
=
 
1
6
,
 
k
 
=
 
3
)
:
 
B
l
o
o
m
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
s
e
e
d
s
 
=
 
[
7
,
 
1
9
,
 
3
7
]
;


 
 
c
o
n
s
t
 
b
i
t
s
 
=
 
n
e
w
 
A
r
r
a
y
(
m
)
.
f
i
l
l
(
0
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
B
l
o
o
m
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
m
,
 
k
,
 
b
i
t
s
S
e
t
:
 
0
 
}
,
 
m
e
s
s
a
g
e
:
 
`
F
r
e
s
h
 
f
i
l
t
e
r
 
w
i
t
h
 
m
=
$
{
m
}
 
b
i
t
s
,
 
k
=
$
{
k
}
 
h
a
s
h
e
s
.
`
,
 
b
i
t
s
:
 
[
.
.
.
b
i
t
s
]
,
 
h
i
g
h
l
i
g
h
t
B
i
t
s
:
 
[
]
,
 
o
p
:
 
"
i
n
s
e
r
t
"
,
 
i
t
e
m
:
 
"
"
 
}
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
o
p
 
o
f
 
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
 
p
o
s
i
t
i
o
n
s
 
=
 
s
e
e
d
s
.
s
l
i
c
e
(
0
,
 
k
)
.
m
a
p
(
(
s
)
 
=
>
 
h
a
s
h
I
t
e
m
(
o
p
.
i
t
e
m
,
 
s
,
 
m
)
)
;


 
 
 
 
i
f
 
(
o
p
.
k
i
n
d
 
=
=
=
 
"
i
n
s
e
r
t
"
)
 
{


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
i
t
e
m
:
 
o
p
.
i
t
e
m
,
 
p
o
s
i
t
i
o
n
s
:
 
p
o
s
i
t
i
o
n
s
.
j
o
i
n
(
"
,
"
)
 
}
,
 
m
e
s
s
a
g
e
:
 
`
I
n
s
e
r
t
 
"
$
{
o
p
.
i
t
e
m
}
"
 
-
 
h
a
s
h
 
t
o
 
b
i
t
 
p
o
s
i
t
i
o
n
s
 
$
{
p
o
s
i
t
i
o
n
s
.
j
o
i
n
(
"
,
 
"
)
}
.
`
,
 
b
i
t
s
:
 
[
.
.
.
b
i
t
s
]
,
 
h
i
g
h
l
i
g
h
t
B
i
t
s
:
 
p
o
s
i
t
i
o
n
s
,
 
o
p
:
 
"
i
n
s
e
r
t
"
,
 
i
t
e
m
:
 
o
p
.
i
t
e
m
 
}
)
;


 
 
 
 
 
 
p
o
s
i
t
i
o
n
s
.
f
o
r
E
a
c
h
(
(
p
)
 
=
>
 
(
b
i
t
s
[
p
]
 
=
 
1
)
)
;


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
b
i
t
s
S
e
t
:
 
b
i
t
s
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
.
l
e
n
g
t
h
 
}
,
 
m
e
s
s
a
g
e
:
 
`
S
e
t
 
b
i
t
s
 
$
{
p
o
s
i
t
i
o
n
s
.
j
o
i
n
(
"
,
 
"
)
}
 
t
o
 
1
.
`
,
 
b
i
t
s
:
 
[
.
.
.
b
i
t
s
]
,
 
h
i
g
h
l
i
g
h
t
B
i
t
s
:
 
p
o
s
i
t
i
o
n
s
,
 
o
p
:
 
"
i
n
s
e
r
t
"
,
 
i
t
e
m
:
 
o
p
.
i
t
e
m
,
 
v
e
r
d
i
c
t
:
 
"
i
n
s
e
r
t
e
d
"
 
}
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
5
,
 
v
a
r
s
:
 
{
 
i
t
e
m
:
 
o
p
.
i
t
e
m
,
 
p
o
s
i
t
i
o
n
s
:
 
p
o
s
i
t
i
o
n
s
.
j
o
i
n
(
"
,
"
)
 
}
,
 
m
e
s
s
a
g
e
:
 
`
Q
u
e
r
y
 
"
$
{
o
p
.
i
t
e
m
}
"
 
-
 
c
h
e
c
k
 
b
i
t
 
p
o
s
i
t
i
o
n
s
 
$
{
p
o
s
i
t
i
o
n
s
.
j
o
i
n
(
"
,
 
"
)
}
.
`
,
 
b
i
t
s
:
 
[
.
.
.
b
i
t
s
]
,
 
h
i
g
h
l
i
g
h
t
B
i
t
s
:
 
p
o
s
i
t
i
o
n
s
,
 
o
p
:
 
"
q
u
e
r
y
"
,
 
i
t
e
m
:
 
o
p
.
i
t
e
m
 
}
)
;


 
 
 
 
 
 
c
o
n
s
t
 
a
l
l
O
n
e
 
=
 
p
o
s
i
t
i
o
n
s
.
e
v
e
r
y
(
(
p
)
 
=
>
 
b
i
t
s
[
p
]
 
=
=
=
 
1
)
;


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
7
,
 
v
a
r
s
:
 
{
 
v
e
r
d
i
c
t
:
 
a
l
l
O
n
e
 
?
 
"
p
r
o
b
a
b
l
y
 
Y
E
S
"
 
:
 
"
d
e
f
i
n
i
t
e
l
y
 
N
O
"
 
}
,
 
m
e
s
s
a
g
e
:
 
a
l
l
O
n
e
 
?
 
`
A
l
l
 
b
i
t
s
 
s
e
t
 
-
>
 
p
r
o
b
a
b
l
y
 
Y
E
S
 
(
c
o
u
l
d
 
b
e
 
f
a
l
s
e
 
p
o
s
i
t
i
v
e
)
.
`
 
:
 
`
A
t
 
l
e
a
s
t
 
o
n
e
 
b
i
t
 
i
s
 
0
 
-
>
 
d
e
f
i
n
i
t
e
l
y
 
N
O
.
`
,
 
b
i
t
s
:
 
[
.
.
.
b
i
t
s
]
,
 
h
i
g
h
l
i
g
h
t
B
i
t
s
:
 
p
o
s
i
t
i
o
n
s
,
 
o
p
:
 
"
q
u
e
r
y
"
,
 
i
t
e
m
:
 
o
p
.
i
t
e
m
,
 
v
e
r
d
i
c
t
:
 
a
l
l
O
n
e
 
?
 
"
p
r
o
b
a
b
l
y
 
y
e
s
"
 
:
 
"
d
e
f
i
n
i
t
e
l
y
 
n
o
"
 
}
)
;


 
 
 
 
}


 
 
}


 
 
r
e
t
u
r
n
 
f
r
a
m
e
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
 
B
l
o
o
m
V
i
z
(
{
 
f
r
a
m
e
 
}
:
 
{
 
f
r
a
m
e
:
 
B
l
o
o
m
F
r
a
m
e
 
}
)
 
{


 
 
c
o
n
s
t
 
c
e
l
l
 
=
 
3
2
;


 
 
c
o
n
s
t
 
v
e
r
d
i
c
t
C
o
l
o
r
 
=
 
f
r
a
m
e
.
v
e
r
d
i
c
t
 
=
=
=
 
"
d
e
f
i
n
i
t
e
l
y
 
n
o
"
 
?
 
T
H
E
M
E
.
d
a
n
g
e
r
 
:
 
f
r
a
m
e
.
v
e
r
d
i
c
t
 
=
=
=
 
"
p
r
o
b
a
b
l
y
 
y
e
s
"
 
?
 
"
#
f
5
9
e
0
b
"
 
:
 
T
H
E
M
E
.
s
u
c
c
e
s
s
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
 
g
a
p
-
3
.
5
 
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
 
g
a
p
-
0
.
5
 
f
l
e
x
-
w
r
a
p
 
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


 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
b
i
t
s
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
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
h
l
 
=
 
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
B
i
t
s
.
i
n
c
l
u
d
e
s
(
i
)
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
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
 
f
l
e
x
-
c
o
l
 
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
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
e
x
t
r
a
b
o
l
d
 
r
o
u
n
d
e
d
 
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
a
l
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
c
e
l
l
,
 
h
e
i
g
h
t
:
 
c
e
l
l
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
b
 
?
 
(
h
l
 
?
 
T
H
E
M
E
.
a
c
c
e
n
t
 
:
 
"
#
6
4
7
4
8
b
"
)
 
:
 
(
h
l
 
?
 
"
r
g
b
a
(
2
4
5
,
1
5
8
,
1
1
,
0
.
2
)
"
 
:
 
T
H
E
M
E
.
b
g
)
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
b
 
?
 
"
#
f
f
f
"
 
:
 
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
h
l
 
?
 
"
2
p
x
 
s
o
l
i
d
 
#
f
5
9
e
0
b
"
 
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
T
H
E
M
E
.
b
o
r
d
e
r
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>
{
b
}
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
t
e
x
t
-
[
9
p
x
]
"
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
b
 
?
 
"
r
g
b
a
(
2
5
5
,
2
5
5
,
2
5
5
,
0
.
7
)
"
 
:
 
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
 
}
}
>
{
i
}
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
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
{
f
r
a
m
e
.
i
t
e
m
 
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
.
5
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
s
t
o
n
e
-
5
0
"
>
{
f
r
a
m
e
.
o
p
}
 
&
q
u
o
t
;
<
s
t
r
o
n
g
>
{
f
r
a
m
e
.
i
t
e
m
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
&
q
u
o
t
;
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
v
e
r
d
i
c
t
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
 
f
o
n
t
-
b
o
l
d
 
p
x
-
3
 
p
y
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
m
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
v
e
r
d
i
c
t
C
o
l
o
r
}
1
a
`
,
 
c
o
l
o
r
:
 
v
e
r
d
i
c
t
C
o
l
o
r
,
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
v
e
r
d
i
c
t
C
o
l
o
r
}
6
6
`
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
v
e
r
d
i
c
t
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
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


 
 
 
 
 
 
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
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
 
p
a
r
s
e
B
l
o
o
m
O
p
s
(
s
:
 
s
t
r
i
n
g
)
:
 
{
 
k
i
n
d
:
 
"
i
n
s
e
r
t
"
 
|
 
"
q
u
e
r
y
"
;
 
i
t
e
m
:
 
s
t
r
i
n
g
 
}
[
]
 
|
 
n
u
l
l
 
{


 
 
c
o
n
s
t
 
t
o
k
s
 
=
 
s
.
s
p
l
i
t
(
/
[
;
\
n
]
+
/
)
.
m
a
p
(
(
t
)
 
=
>
 
t
.
t
r
i
m
(
)
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


 
 
c
o
n
s
t
 
o
p
s
:
 
{
 
k
i
n
d
:
 
"
i
n
s
e
r
t
"
 
|
 
"
q
u
e
r
y
"
;
 
i
t
e
m
:
 
s
t
r
i
n
g
 
}
[
]
 
=
 
[
]
;


 
 
f
o
r
 
(
c
o
n
s
t
 
t
 
o
f
 
t
o
k
s
)
 
{


 
 
 
 
c
o
n
s
t
 
m
 
=
 
t
.
m
a
t
c
h
(
/
^
(
i
n
s
e
r
t
|
q
u
e
r
y
)
\
s
*
\
(
?
\
s
*
(
[
A
-
Z
a
-
z
0
-
9
_
]
+
)
\
s
*
\
)
?
$
/
i
)
;


 
 
 
 
i
f
 
(
!
m
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
o
p
s
.
p
u
s
h
(
{
 
k
i
n
d
:
 
m
[
1
]
.
t
o
L
o
w
e
r
C
a
s
e
(
)
 
a
s
 
"
i
n
s
e
r
t
"
 
|
 
"
q
u
e
r
y
"
,
 
i
t
e
m
:
 
m
[
2
]
 
}
)
;


 
 
}


 
 
r
e
t
u
r
n
 
o
p
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
 
B
l
o
o
m
V
i
s
u
a
l
i
z
e
r
(
)
 
{


 
 
c
o
n
s
t
 
[
s
r
c
,
 
s
e
t
S
r
c
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
i
n
s
e
r
t
(
a
p
p
l
e
)
;
 
i
n
s
e
r
t
(
b
a
n
a
n
a
)
;
 
i
n
s
e
r
t
(
c
h
e
r
r
y
)
;
 
q
u
e
r
y
(
a
p
p
l
e
)
;
 
q
u
e
r
y
(
g
r
a
p
e
)
"
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
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
 
o
p
s
 
=
 
p
a
r
s
e
B
l
o
o
m
O
p
s
(
s
r
c
)
 
?
?
 
[
]
;


 
 
 
 
r
e
t
u
r
n
 
b
u
i
l
d
B
l
o
o
m
F
r
a
m
e
s
(
o
p
s
.
l
e
n
g
t
h
 
?
 
o
p
s
 
:
 
[
{
 
k
i
n
d
:
 
"
i
n
s
e
r
t
"
,
 
i
t
e
m
:
 
"
a
p
p
l
e
"
 
}
]
)
;


 
 
}
,
 
[
s
r
c
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
"
B
l
o
o
m
 
F
i
l
t
e
r
 
-
 
P
r
o
b
a
b
i
l
i
s
t
i
c
 
M
e
m
b
e
r
s
h
i
p
"


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
O
p
s
 
(
s
e
m
i
c
o
l
o
n
-
s
e
p
a
r
a
t
e
d
)
.
 
i
n
s
e
r
t
(
x
)
 
/
 
q
u
e
r
y
(
x
)
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
r
c
}


 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
l
a
s
s
i
c
"
,
 
v
a
l
u
e
:
 
"
i
n
s
e
r
t
(
a
p
p
l
e
)
;
 
i
n
s
e
r
t
(
b
a
n
a
n
a
)
;
 
i
n
s
e
r
t
(
c
h
e
r
r
y
)
;
 
q
u
e
r
y
(
a
p
p
l
e
)
;
 
q
u
e
r
y
(
g
r
a
p
e
)
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
F
a
l
s
e
 
p
o
s
i
t
i
v
e
?
"
,
 
v
a
l
u
e
:
 
"
i
n
s
e
r
t
(
c
a
t
)
;
 
i
n
s
e
r
t
(
d
o
g
)
;
 
q
u
e
r
y
(
b
a
t
)
;
 
q
u
e
r
y
(
c
a
t
)
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
E
m
p
t
y
 
f
i
l
t
e
r
"
,
 
v
a
l
u
e
:
 
"
q
u
e
r
y
(
a
p
p
l
e
)
;
 
i
n
s
e
r
t
(
a
p
p
l
e
)
;
 
q
u
e
r
y
(
a
p
p
l
e
)
"
 
}
,


 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{
 
i
f
 
(
p
a
r
s
e
B
l
o
o
m
O
p
s
(
v
)
)
 
s
e
t
S
r
c
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
P
S
E
U
D
O
_
B
L
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
/
>
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
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
.
5
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
x
s
 
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
5
0
0
 
f
l
e
x
 
g
a
p
-
3
.
5
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
<
s
t
r
o
n
g
>
m
=
1
6
 
b
i
t
s
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
 
<
s
t
r
o
n
g
>
k
=
3
 
h
a
s
h
e
s
<
/
s
t
r
o
n
g
>
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
<
s
t
r
o
n
g
 
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
e
m
e
r
a
l
d
-
6
0
0
"
>
d
e
f
i
n
i
t
e
l
y
 
N
O
<
/
s
t
r
o
n
g
>
 
-
 
a
n
y
 
b
i
t
 
i
s
 
0
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
<
s
t
r
o
n
g
 
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
>
p
r
o
b
a
b
l
y
 
Y
E
S
<
/
s
t
r
o
n
g
>
 
-
 
a
l
l
 
b
i
t
s
 
s
e
t
 
(
m
a
y
 
b
e
 
f
a
l
s
e
 
p
o
s
i
t
i
v
e
)
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


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
B
l
o
o
m
V
i
z
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
/
>
}


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
{
f
r
a
m
e
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
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
.
"
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
V
i
s
u
a
l
i
z
e
 
s
w
i
t
c
h
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
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
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
w
h
i
c
h
,
 
s
e
t
W
h
i
c
h
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
"
b
t
r
e
e
"
 
|
 
"
r
b
"
 
|
 
"
s
k
i
p
"
 
|
 
"
b
l
o
o
m
"
>
(
"
b
t
r
e
e
"
)
;


 
 
c
o
n
s
t
 
o
p
t
s
:
 
{
 
k
:
 
t
y
p
e
o
f
 
w
h
i
c
h
;
 
l
a
b
e
l
:
 
s
t
r
i
n
g
 
}
[
]
 
=
 
[


 
 
 
 
{
 
k
:
 
"
b
t
r
e
e
"
,
 
l
a
b
e
l
:
 
"
B
-
T
r
e
e
"
 
}
,


 
 
 
 
{
 
k
:
 
"
r
b
"
,
 
l
a
b
e
l
:
 
"
R
e
d
-
B
l
a
c
k
 
T
r
e
e
"
 
}
,


 
 
 
 
{
 
k
:
 
"
s
k
i
p
"
,
 
l
a
b
e
l
:
 
"
S
k
i
p
 
L
i
s
t
"
 
}
,


 
 
 
 
{
 
k
:
 
"
b
l
o
o
m
"
,
 
l
a
b
e
l
:
 
"
B
l
o
o
m
 
F
i
l
t
e
r
"
 
}
,


 
 
]
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
 
g
a
p
-
3
.
5
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
 
g
a
p
-
2
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
{
o
p
t
s
.
m
a
p
(
(
o
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n
 
k
e
y
=
{
o
.
k
}
 
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
W
h
i
c
h
(
o
.
k
)
}
 
a
c
t
i
v
e
=
{
w
h
i
c
h
 
=
=
=
 
o
.
k
}
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
"
>
{
o
.
l
a
b
e
l
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
P
i
l
l
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
{
w
h
i
c
h
 
=
=
=
 
"
b
t
r
e
e
"
 
&
&
 
<
B
T
r
e
e
V
i
s
u
a
l
i
z
e
r
 
/
>
}


 
 
 
 
 
 
{
w
h
i
c
h
 
=
=
=
 
"
r
b
"
 
&
&
 
<
R
B
T
r
e
e
V
i
s
u
a
l
i
z
e
r
 
/
>
}


 
 
 
 
 
 
{
w
h
i
c
h
 
=
=
=
 
"
s
k
i
p
"
 
&
&
 
<
S
k
i
p
L
i
s
t
V
i
s
u
a
l
i
z
e
r
 
/
>
}


 
 
 
 
 
 
{
w
h
i
c
h
 
=
=
=
 
"
b
l
o
o
m
"
 
&
&
 
<
B
l
o
o
m
V
i
s
u
a
l
i
z
e
r
 
/
>
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
L
e
a
r
n
 
/
 
T
r
y
 
/
 
I
n
s
i
g
h
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
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
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
s
e
c
t
i
o
n
s
 
=
 
[


 
 
 
 
{
 
t
i
t
l
e
:
 
"
B
-
T
r
e
e
"
,
 
b
o
d
y
:
 
"
G
e
n
e
r
a
l
i
z
e
d
 
B
S
T
 
w
h
e
r
e
 
e
a
c
h
 
n
o
d
e
 
h
o
l
d
s
 
u
p
 
t
o
 
2
t
-
1
 
k
e
y
s
 
a
n
d
 
h
a
s
 
u
p
 
t
o
 
2
t
 
c
h
i
l
d
r
e
n
.
 
S
h
a
l
l
o
w
 
(
O
(
l
o
g
_
t
 
n
)
 
h
e
i
g
h
t
)
 
a
n
d
 
d
i
s
k
-
f
r
i
e
n
d
l
y
.
 
H
e
a
r
t
 
o
f
 
d
a
t
a
b
a
s
e
s
 
a
n
d
 
f
i
l
e
s
y
s
t
e
m
s
 
(
M
y
S
Q
L
 
I
n
n
o
D
B
,
 
N
T
F
S
)
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
R
e
d
-
B
l
a
c
k
 
T
r
e
e
"
,
 
b
o
d
y
:
 
"
A
 
B
S
T
 
w
i
t
h
 
a
 
c
o
l
o
r
 
b
i
t
 
p
e
r
 
n
o
d
e
 
a
n
d
 
5
 
i
n
v
a
r
i
a
n
t
s
 
t
h
a
t
 
k
e
e
p
 
h
e
i
g
h
t
 
<
=
 
2
 
l
o
g
(
n
+
1
)
.
 
I
n
s
e
r
t
 
/
 
d
e
l
e
t
e
 
t
a
k
e
 
O
(
l
o
g
 
n
)
.
 
U
s
e
d
 
i
n
 
L
i
n
u
x
 
C
F
S
 
s
c
h
e
d
u
l
e
r
,
 
s
t
d
:
:
m
a
p
,
 
j
a
v
a
.
u
t
i
l
.
T
r
e
e
M
a
p
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
S
k
i
p
 
L
i
s
t
"
,
 
b
o
d
y
:
 
"
S
t
a
c
k
e
d
 
s
o
r
t
e
d
 
l
i
n
k
e
d
 
l
i
s
t
s
 
w
h
e
r
e
 
e
a
c
h
 
e
l
e
m
e
n
t
 
i
s
 
p
r
o
m
o
t
e
d
 
t
o
 
t
h
e
 
n
e
x
t
 
l
e
v
e
l
 
w
i
t
h
 
p
r
o
b
a
b
i
l
i
t
y
 
p
.
 
S
e
a
r
c
h
 
d
e
s
c
e
n
d
s
 
a
n
d
 
s
t
e
p
s
 
r
i
g
h
t
 
-
 
O
(
l
o
g
 
n
)
 
e
x
p
e
c
t
e
d
.
 
U
s
e
d
 
i
n
 
R
e
d
i
s
 
s
o
r
t
e
d
 
s
e
t
s
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
B
l
o
o
m
 
F
i
l
t
e
r
"
,
 
b
o
d
y
:
 
"
B
i
t
 
a
r
r
a
y
 
o
f
 
m
 
b
i
t
s
 
+
 
k
 
i
n
d
e
p
e
n
d
e
n
t
 
h
a
s
h
 
f
u
n
c
t
i
o
n
s
.
 
i
n
s
e
r
t
(
x
)
 
s
e
t
s
 
k
 
b
i
t
s
;
 
q
u
e
r
y
(
x
)
 
r
e
t
u
r
n
s
 
'
n
o
'
 
i
f
 
a
n
y
 
b
i
t
 
i
s
 
0
,
 
e
l
s
e
 
'
p
r
o
b
a
b
l
y
 
y
e
s
'
.
 
N
o
 
f
a
l
s
e
 
n
e
g
a
t
i
v
e
s
,
 
t
u
n
a
b
l
e
 
f
a
l
s
e
 
p
o
s
i
t
i
v
e
s
.
 
U
s
e
d
 
i
n
 
B
i
g
t
a
b
l
e
,
 
C
a
s
s
a
n
d
r
a
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
W
h
e
n
 
e
a
c
h
 
w
i
n
s
"
,
 
b
o
d
y
:
 
"
B
-
T
r
e
e
:
 
h
u
g
e
 
d
a
t
a
s
e
t
s
 
o
n
 
d
i
s
k
.
 
R
e
d
-
B
l
a
c
k
:
 
i
n
-
m
e
m
o
r
y
 
o
r
d
e
r
e
d
 
m
a
p
.
 
S
k
i
p
 
L
i
s
t
:
 
c
o
n
c
u
r
r
e
n
t
 
/
 
s
i
m
p
l
e
 
c
o
d
e
.
 
B
l
o
o
m
 
F
i
l
t
e
r
:
 
m
e
m
b
e
r
s
h
i
p
 
s
c
r
e
e
n
i
n
g
 
b
e
f
o
r
e
 
e
x
p
e
n
s
i
v
e
 
l
o
o
k
u
p
s
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
B
l
o
o
m
 
m
a
t
h
"
,
 
b
o
d
y
:
 
"
W
i
t
h
 
n
 
i
n
s
e
r
t
i
o
n
s
 
i
n
t
o
 
m
 
b
i
t
s
 
u
s
i
n
g
 
k
 
h
a
s
h
e
s
,
 
f
a
l
s
e
 
p
o
s
i
t
i
v
e
 
p
r
o
b
a
b
i
l
i
t
y
 
~
 
(
1
 
-
 
e
^
(
-
k
n
/
m
)
)
^
k
.
 
O
p
t
i
m
a
l
 
k
 
~
 
(
m
/
n
)
 
*
 
l
n
 
2
.
 
C
l
a
s
s
i
c
 
i
n
t
e
r
v
i
e
w
 
f
o
r
m
u
l
a
.
"
 
}
,


 
 
]
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
 
g
a
p
-
3
.
5
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
S
p
e
c
i
a
l
i
z
e
d
 
s
t
r
u
c
t
u
r
e
s
,
 
f
o
u
r
 
t
r
a
d
e
-
o
f
f
s
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
P
i
c
k
 
t
h
e
 
t
o
o
l
 
t
o
 
m
a
t
c
h
 
t
h
e
 
c
o
n
s
t
r
a
i
n
t
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
F
o
u
r
 
s
p
e
c
i
a
l
i
z
e
d
 
s
t
r
u
c
t
u
r
e
s
,
 
f
o
u
r
 
t
r
a
d
e
-
o
f
f
s
:
 
d
i
s
k
-
f
r
i
e
n
d
l
y
,
 
s
e
l
f
-
b
a
l
a
n
c
i
n
g
 
i
n
 
m
e
m
o
r
y
,


 
 
 
 
 
 
 
 
 
 
p
r
o
b
a
b
i
l
i
s
t
i
c
 
l
a
n
e
s
 
f
o
r
 
s
p
e
e
d
,
 
a
n
d
 
a
 
t
i
n
y
 
b
i
t
-
a
r
r
a
y
 
f
o
r
 
a
p
p
r
o
x
i
m
a
t
e
 
m
e
m
b
e
r
s
h
i
p
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
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
g
r
i
d
 
g
a
p
-
2
.
5
"
 
s
t
y
l
e
=
{
{
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
a
u
t
o
-
f
i
t
,
 
m
i
n
m
a
x
(
2
6
0
p
x
,
 
1
f
r
)
)
"
 
}
}
>


 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
s
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
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
l
i
m
e
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
l
i
m
e
-
4
0
0
 
m
b
-
1
.
5
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
0
{
i
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
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
m
 
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
s
t
o
n
e
-
5
0
 
m
b
-
1
"
>
{
s
.
t
i
t
l
e
}
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
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
{
s
.
b
o
d
y
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
 
 
)
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
d
i
v
>


 
 
)
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
 
T
r
y
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
p
r
o
b
l
e
m
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
A
 
B
-
T
r
e
e
 
o
f
 
o
r
d
e
r
 
t
=
3
 
(
m
i
n
 
d
e
g
)
 
h
a
s
 
h
o
w
 
m
a
n
y
 
k
e
y
s
 
m
a
x
 
p
e
r
 
n
o
d
e
?
"
,
 
a
n
s
w
e
r
:
 
"
5
"
 
}
,


 
 
 
 
{
 
q
:
 
"
I
n
s
e
r
t
 
1
,
2
,
3
,
4
,
5
,
6
,
7
 
i
n
t
o
 
a
n
 
e
m
p
t
y
 
r
e
d
-
b
l
a
c
k
 
t
r
e
e
.
 
W
h
a
t
 
i
s
 
t
h
e
 
r
o
o
t
 
k
e
y
?
"
,
 
a
n
s
w
e
r
:
 
"
4
"
 
}
,


 
 
 
 
{
 
q
:
 
"
I
n
 
a
 
s
k
i
p
 
l
i
s
t
,
 
e
x
p
e
c
t
e
d
 
s
e
a
r
c
h
 
t
i
m
e
?
"
,
 
a
n
s
w
e
r
:
 
"
O
(
l
o
g
 
n
)
"
 
}
,


 
 
 
 
{
 
q
:
 
"
A
 
B
l
o
o
m
 
f
i
l
t
e
r
 
r
e
t
u
r
n
s
 
'
p
r
o
b
a
b
l
y
 
y
e
s
'
 
-
 
i
s
 
a
 
f
a
l
s
e
 
p
o
s
i
t
i
v
e
 
p
o
s
s
i
b
l
e
?
 
(
y
e
s
/
n
o
)
"
,
 
a
n
s
w
e
r
:
 
"
y
e
s
"
 
}
,


 
 
]
;


 
 
c
o
n
s
t
 
[
g
u
e
s
s
e
s
,
 
s
e
t
G
u
e
s
s
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
s
t
r
i
n
g
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
"
"
)
)
;


 
 
c
o
n
s
t
 
[
s
h
o
w
n
,
 
s
e
t
S
h
o
w
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
<
b
o
o
l
e
a
n
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
f
a
l
s
e
)
)
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
 
g
a
p
-
3
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
S
h
o
r
t
 
a
n
s
w
e
r
s
.
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
{
p
r
o
b
l
e
m
s
.
m
a
p
(
(
p
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
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
s
t
o
n
e
-
5
0
 
m
b
-
2
.
5
 
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
{
p
.
q
}
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
 
g
a
p
-
2
 
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
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
u
e
s
s
e
s
[
i
]
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
 
{
 
c
o
n
s
t
 
g
 
=
 
[
.
.
.
g
u
e
s
s
e
s
]
;
 
g
[
i
]
 
=
 
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
;
 
s
e
t
G
u
e
s
s
e
s
(
g
)
;
 
}
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
y
o
u
r
 
a
n
s
w
e
r
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
p
x
-
2
.
5
 
p
y
-
1
.
5
 
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
s
t
o
n
e
-
5
0
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
m
 
w
-
3
6
 
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
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
 
c
o
n
s
t
 
s
 
=
 
[
.
.
.
s
h
o
w
n
]
;
 
s
[
i
]
 
=
 
t
r
u
e
;
 
s
e
t
S
h
o
w
n
(
s
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
p
x
-
3
 
p
y
-
1
.
5
 
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
b
o
l
d
 
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
s
t
o
n
e
-
9
0
0
 
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
s
t
o
n
e
-
4
0
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
h
o
v
e
r
:
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
4
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
3
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
e
a
l


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
n
[
i
]
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
f
o
n
t
-
b
o
l
d
 
p
x
-
3
 
p
y
-
1
.
5
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
T
H
E
M
E
.
a
c
c
e
n
t
}
1
0
`
,
 
c
o
l
o
r
:
 
T
H
E
M
E
.
t
e
x
t
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
n
s
w
e
r
:
 
{
p
.
a
n
s
w
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
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
C
a
r
d
>


 
 
 
 
 
 
)
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
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
 
I
n
s
i
g
h
t
T
a
b
(
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
"
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
 
g
a
p
-
3
"
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
B
-
T
r
e
e
 
v
s
 
B
S
T
:
 
d
i
s
k
 
s
t
o
r
y
<
/
S
u
b
H
e
a
d
i
n
g
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
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


 
 
 
 
 
 
 
 
 
 
A
 
B
S
T
 
s
t
o
r
i
n
g
 
1
0
^
9
 
k
e
y
s
 
h
a
s
 
h
e
i
g
h
t
 
~
3
0
.
 
T
h
a
t
&
r
s
q
u
o
;
s
 
3
0
 
d
i
s
k
 
s
e
e
k
s
 
p
e
r
 
q
u
e
r
y
.
 
A
 
B
-
T
r
e
e
 
w
i
t
h
 
t
 
=
 
2
5
6
 
h
a
s
 
h
e
i
g
h
t
 
~
4
 
-
 
o
n
e
 
t
w
e
n
t
i
e
t
h
 
t
h
e
 
I
/
O
.
 
W
h
e
n
 
y
o
u
r
 
b
o
t
t
l
e
n
e
c
k
 
i
s
 
d
i
s
k
 
(
o
r
 
n
e
t
w
o
r
k
)
,
 
f
a
t
 
n
o
d
e
s
 
w
i
n
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
R
e
d
-
B
l
a
c
k
 
5
 
i
n
v
a
r
i
a
n
t
s
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
o
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
s
m
 
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
s
t
o
n
e
-
4
0
0
 
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
 
p
l
-
5
 
l
i
s
t
-
d
e
c
i
m
a
l
 
s
p
a
c
e
-
y
-
1
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
E
v
e
r
y
 
n
o
d
e
 
i
s
 
r
e
d
 
o
r
 
b
l
a
c
k
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
R
o
o
t
 
i
s
 
b
l
a
c
k
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
A
l
l
 
l
e
a
v
e
s
 
(
N
I
L
)
 
a
r
e
 
b
l
a
c
k
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
R
e
d
 
n
o
d
e
&
r
s
q
u
o
;
s
 
c
h
i
l
d
r
e
n
 
a
r
e
 
b
l
a
c
k
 
(
n
o
 
t
w
o
 
r
e
d
s
 
a
d
j
a
c
e
n
t
)
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
E
v
e
r
y
 
p
a
t
h
 
f
r
o
m
 
a
 
n
o
d
e
 
t
o
 
d
e
s
c
e
n
d
a
n
t
 
l
e
a
v
e
s
 
c
o
n
t
a
i
n
s
 
t
h
e
 
s
a
m
e
 
n
u
m
b
e
r
 
o
f
 
b
l
a
c
k
 
n
o
d
e
s
.
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
o
l
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
B
l
o
o
m
 
f
i
l
t
e
r
:
 
n
o
 
d
e
l
e
t
e
s
!
<
/
S
u
b
H
e
a
d
i
n
g
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
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


 
 
 
 
 
 
 
 
 
 
Y
o
u
 
c
a
n
&
r
s
q
u
o
;
t
 
s
i
m
p
l
y
 
u
n
s
e
t
 
b
i
t
s
 
b
e
c
a
u
s
e
 
m
u
l
t
i
p
l
e
 
i
t
e
m
s
 
m
a
y
 
s
h
a
r
e
 
t
h
e
m
.
 
S
o
l
u
t
i
o
n
:
 
C
o
u
n
t
i
n
g
 
B
l
o
o
m
 
F
i
l
t
e
r
 
(
e
a
c
h
 
c
e
l
l
 
i
s
 
a
n
 
i
n
t
e
g
e
r
 
c
o
u
n
t
e
r
)
.
 
M
o
r
e
 
m
e
m
o
r
y
,
 
b
u
t
 
d
e
l
e
t
e
(
)
 
i
s
 
O
(
k
)
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
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




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
A
c
t
i
v
i
t
y
 
e
x
p
o
r
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




i
n
t
e
r
f
a
c
e
 
P
r
o
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
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
7
_
A
d
v
a
n
c
e
d
D
S
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
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
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
n
"
,
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
e
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,
 
i
c
o
n
:
 
<
P
l
a
y
 
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
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
"
,
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,
 
i
c
o
n
:
 
<
T
a
r
g
e
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
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
s
i
g
h
t
"
,
 
l
a
b
e
l
:
 
"
I
n
s
i
g
h
t
"
,
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
b
 
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
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
 
B
-
T
r
e
e
 
o
f
 
m
i
n
i
m
u
m
 
d
e
g
r
e
e
 
t
 
h
a
s
 
h
o
w
 
m
a
n
y
 
k
e
y
s
 
p
e
r
 
i
n
t
e
r
n
a
l
 
n
o
d
e
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
e
x
a
c
t
l
y
 
t
"
,
 
"
b
e
t
w
e
e
n
 
t
-
1
 
a
n
d
 
2
t
-
1
"
,
 
"
b
e
t
w
e
e
n
 
t
+
1
 
a
n
d
 
2
t
"
,
 
"
e
x
a
c
t
l
y
 
2
t
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
E
a
c
h
 
n
o
n
-
r
o
o
t
 
B
-
T
r
e
e
 
n
o
d
e
 
h
a
s
 
a
t
 
l
e
a
s
t
 
t
-
1
 
k
e
y
s
 
a
n
d
 
a
t
 
m
o
s
t
 
2
t
-
1
 
k
e
y
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
a
t
 
i
s
 
t
h
e
 
m
a
x
i
m
u
m
 
h
e
i
g
h
t
 
o
f
 
a
 
R
e
d
-
B
l
a
c
k
 
t
r
e
e
 
w
i
t
h
 
n
 
n
o
d
e
s
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
l
o
g
2
 
n
"
,
 
"
2
 
*
 
l
o
g
2
(
n
 
+
 
1
)
"
,
 
"
n
 
/
 
2
"
,
 
"
s
q
r
t
(
n
)
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
B
y
 
t
h
e
 
b
l
a
c
k
-
h
e
i
g
h
t
 
i
n
v
a
r
i
a
n
t
,
 
h
e
i
g
h
t
 
<
=
 
2
 
*
 
l
o
g
(
n
+
1
)
.
 
S
l
i
g
h
t
l
y
 
w
o
r
s
e
 
t
h
a
n
 
A
V
L
 
b
u
t
 
s
t
i
l
l
 
O
(
l
o
g
 
n
)
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
 
B
l
o
o
m
 
f
i
l
t
e
r
 
c
a
n
 
r
e
t
u
r
n
 
w
h
i
c
h
 
k
i
n
d
 
o
f
 
e
r
r
o
r
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
F
a
l
s
e
 
n
e
g
a
t
i
v
e
s
 
o
n
l
y
"
,
 
"
F
a
l
s
e
 
p
o
s
i
t
i
v
e
s
 
o
n
l
y
"
,
 
"
B
o
t
h
 
f
a
l
s
e
 
p
o
s
i
t
i
v
e
s
 
a
n
d
 
f
a
l
s
e
 
n
e
g
a
t
i
v
e
s
"
,
 
"
N
e
i
t
h
e
r
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
I
f
 
a
l
l
 
k
 
b
i
t
s
 
a
r
e
 
s
e
t
,
 
m
e
m
b
e
r
s
h
i
p
 
i
s
 
'
p
r
o
b
a
b
l
y
 
y
e
s
'
 
(
p
o
s
s
i
b
l
e
 
f
a
l
s
e
 
p
o
s
i
t
i
v
e
)
.
 
I
f
 
a
n
y
 
b
i
t
 
i
s
 
0
,
 
i
t
e
m
 
i
s
 
d
e
f
i
n
i
t
e
l
y
 
n
o
t
 
p
r
e
s
e
n
t
 
-
 
n
o
 
f
a
l
s
e
 
n
e
g
a
t
i
v
e
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
E
x
p
e
c
t
e
d
 
t
i
m
e
 
c
o
m
p
l
e
x
i
t
y
 
f
o
r
 
s
e
a
r
c
h
 
i
n
 
a
 
r
a
n
d
o
m
i
z
e
d
 
s
k
i
p
 
l
i
s
t
 
w
i
t
h
 
n
 
e
l
e
m
e
n
t
s
:
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
O
(
1
)
 
w
o
r
s
t
 
c
a
s
e
"
,
 
"
O
(
l
o
g
 
n
)
 
e
x
p
e
c
t
e
d
"
,
 
"
O
(
s
q
r
t
(
n
)
)
"
,
 
"
O
(
n
)
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
W
i
t
h
 
g
e
o
m
e
t
r
i
c
 
p
r
o
m
o
t
i
o
n
 
p
r
o
b
a
b
i
l
i
t
y
 
p
=
1
/
2
,
 
s
k
i
p
 
l
i
s
t
s
 
a
c
h
i
e
v
e
 
O
(
l
o
g
 
n
)
 
e
x
p
e
c
t
e
d
 
s
e
a
r
c
h
,
 
i
n
s
e
r
t
,
 
a
n
d
 
d
e
l
e
t
e
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
A
d
v
a
n
c
e
d
 
D
a
t
a
 
S
t
r
u
c
t
u
r
e
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
7
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
3
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
M
e
d
i
u
m
 
-
 
d
a
t
a
b
a
s
e
s
,
 
f
i
l
e
s
y
s
t
e
m
s
,
 
c
a
c
h
e
s
,
 
d
i
s
t
r
i
b
u
t
e
d
 
s
y
s
t
e
m
s
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
R
a
b
i
n
-
K
a
r
p
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


