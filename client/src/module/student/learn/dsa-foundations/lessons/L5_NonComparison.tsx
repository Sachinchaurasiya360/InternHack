
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
 
C
o
d
e
2
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


i
m
p
o
r
t
 
{
 
P
r
a
c
t
i
c
e
T
a
b
 
}
 
f
r
o
m
 
"
.
.
/
P
r
a
c
t
i
c
e
T
a
b
"
;




c
o
n
s
t
 
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=
 
"
s
o
r
t
i
n
g
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
 
 
L
o
c
a
l
 
t
y
p
e
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




t
y
p
e
 
C
e
l
l
S
t
a
t
e
 
=
 
"
d
e
f
a
u
l
t
"
 
|
 
"
c
o
m
p
a
r
e
"
 
|
 
"
s
w
a
p
"
 
|
 
"
s
o
r
t
e
d
"
 
|
 
"
a
c
t
i
v
e
"
 
|
 
"
p
i
v
o
t
"
 
|
 
"
v
i
s
i
t
e
d
"
 
|
 
"
d
o
n
e
"
 
|
 
"
l
o
w
"
 
|
 
"
h
i
g
h
"
 
|
 
"
m
i
d
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
 
 
L
o
c
a
l
 
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




c
o
n
s
t
 
S
T
A
T
E
_
C
O
L
O
R
S
:
 
R
e
c
o
r
d
<
C
e
l
l
S
t
a
t
e
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
d
e
f
a
u
l
t
:
 
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
,


 
 
c
o
m
p
a
r
e
:
 
"
#
0
6
b
6
d
4
"
,


 
 
s
w
a
p
:
 
"
#
f
5
9
e
0
b
"
,


 
 
s
o
r
t
e
d
:
 
"
#
a
3
e
6
3
5
"
,


 
 
a
c
t
i
v
e
:
 
"
#
8
1
8
c
f
8
"
,


 
 
p
i
v
o
t
:
 
"
#
f
9
7
3
1
6
"
,


 
 
v
i
s
i
t
e
d
:
 
"
#
d
6
d
3
d
1
"
,


 
 
d
o
n
e
:
 
"
#
a
3
e
6
3
5
"
,


 
 
l
o
w
:
 
"
#
6
0
a
5
f
a
"
,


 
 
h
i
g
h
:
 
"
#
f
8
7
1
7
1
"
,


 
 
m
i
d
:
 
"
#
f
b
9
2
3
c
"
,


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
 
M
i
n
i
B
a
r
s
(
{


 
 
v
a
l
u
e
s
,


 
 
s
t
a
t
e
s
,


 
 
p
o
i
n
t
e
r
s
,


 
 
l
a
b
e
l
,


}
:
 
{


 
 
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
;


 
 
s
t
a
t
e
s
?
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
;


 
 
p
o
i
n
t
e
r
s
?
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
;


}
)
 
{


 
 
c
o
n
s
t
 
m
a
x
 
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
.
.
.
v
a
l
u
e
s
,
 
1
)
;


 
 
c
o
n
s
t
 
n
 
=
 
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
;


 
 
c
o
n
s
t
 
b
a
r
W
 
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
1
6
,
 
M
a
t
h
.
m
i
n
(
3
6
,
 
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
3
6
0
 
/
 
(
n
 
|
|
 
1
)
)
)
)
;


 
 
c
o
n
s
t
 
g
a
p
 
=
 
3
;


 
 
c
o
n
s
t
 
t
o
t
a
l
W
 
=
 
n
 
*
 
(
b
a
r
W
 
+
 
g
a
p
)
 
-
 
g
a
p
;


 
 
c
o
n
s
t
 
H
 
=
 
8
0
;




 
 
c
o
n
s
t
 
p
t
r
B
y
I
d
x
:
 
R
e
c
o
r
d
<
n
u
m
b
e
r
,
 
s
t
r
i
n
g
[
]
>
 
=
 
{
}
;


 
 
i
f
 
(
p
o
i
n
t
e
r
s
)
 
{


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
[
n
a
m
e
,
 
i
d
x
]
 
o
f
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
p
o
i
n
t
e
r
s
)
)
 
{


 
 
 
 
 
 
i
f
 
(
!
p
t
r
B
y
I
d
x
[
i
d
x
]
)
 
p
t
r
B
y
I
d
x
[
i
d
x
]
 
=
 
[
]
;


 
 
 
 
 
 
p
t
r
B
y
I
d
x
[
i
d
x
]
.
p
u
s
h
(
n
a
m
e
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
/
5
0
 
p
-
3
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
{
l
a
b
e
l
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
w
-
f
u
l
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
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
<
d
i
v
 
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
 
t
o
t
a
l
W
,
 
m
a
r
g
i
n
:
 
"
0
 
a
u
t
o
"
,
 
h
e
i
g
h
t
:
 
H
 
+
 
2
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
s
v
g
 
w
i
d
t
h
=
{
t
o
t
a
l
W
}
 
h
e
i
g
h
t
=
{
H
 
+
 
2
4
}
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
b
l
o
c
k
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
v
a
l
u
e
s
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
 
b
a
r
H
 
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
3
,
 
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
(
v
 
/
 
m
a
x
)
 
*
 
(
H
 
-
 
6
)
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
 
=
 
i
 
*
 
(
b
a
r
W
 
+
 
g
a
p
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
 
=
 
H
 
-
 
b
a
r
H
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
a
t
e
 
=
 
(
s
t
a
t
e
s
?
.
[
i
]
 
?
?
 
"
d
e
f
a
u
l
t
"
)
 
a
s
 
C
e
l
l
S
t
a
t
e
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
l
o
r
 
=
 
S
T
A
T
E
_
C
O
L
O
R
S
[
s
t
a
t
e
]
 
?
?
 
S
T
A
T
E
_
C
O
L
O
R
S
.
d
e
f
a
u
l
t
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
t
r
s
 
=
 
p
t
r
B
y
I
d
x
[
i
]
 
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
i
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
x
}
 
y
=
{
y
}
 
w
i
d
t
h
=
{
b
a
r
W
}
 
h
e
i
g
h
t
=
{
b
a
r
H
}
 
f
i
l
l
=
{
c
o
l
o
r
}
 
r
x
=
{
2
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
a
l
l
 
0
.
2
s
 
e
a
s
e
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
x
 
+
 
b
a
r
W
 
/
 
2
}
 
y
=
{
H
 
+
 
1
0
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
"
9
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
{
T
H
E
M
E
.
m
o
n
o
}
 
f
i
l
l
=
{
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
>
{
v
}
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
x
 
+
 
b
a
r
W
 
/
 
2
}
 
y
=
{
H
 
+
 
2
0
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
"
8
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
{
T
H
E
M
E
.
m
o
n
o
}
 
f
i
l
l
=
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
"
7
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
t
r
s
[
0
]
 
?
?
 
"
"
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




f
u
n
c
t
i
o
n
 
O
u
t
p
u
t
S
t
r
i
p
(
{


 
 
v
a
l
u
e
s
,


 
 
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
 
@
t
y
p
e
s
c
r
i
p
t
-
e
s
l
i
n
t
/
n
o
-
u
n
u
s
e
d
-
v
a
r
s


 
 
s
t
a
t
e
s
:
 
_
s
t
a
t
e
s
,


 
 
p
o
i
n
t
e
r
s
,


}
:
 
{


 
 
v
a
l
u
e
s
:
 
(
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
)
[
]
;


 
 
s
t
a
t
e
s
?
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
;


 
 
p
o
i
n
t
e
r
s
?
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
;


}
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
/
5
0
 
p
-
3
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
O
u
t
p
u
t
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
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
 
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
v
a
l
u
e
s
.
m
a
p
(
(
v
,
 
k
)
 
=
>
 
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
 
p
o
i
n
t
e
r
s
 
?
 
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
p
o
i
n
t
e
r
s
)
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
k
)
 
:
 
f
a
l
s
e
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
a
t
e
C
o
l
o
r
 
=
 
v
 
=
=
=
 
n
u
l
l
 
?
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
k
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
C
o
l
o
r
:
 
s
t
a
t
e
C
o
l
o
r
 
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
m
i
n
-
w
-
8
 
p
x
-
1
.
5
 
p
y
-
1
.
5
 
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
-
2
 
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
8
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
5
0
0
 
m
b
-
0
.
5
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
 
v
 
=
=
=
 
n
u
l
l
 
?
 
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
v
 
?
?
 
"
-
"
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
u
c
k
e
t
s
V
i
e
w
(
{
 
b
u
c
k
e
t
s
,
 
a
c
t
i
v
e
 
}
:
 
{
 
b
u
c
k
e
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
[
]
;
 
a
c
t
i
v
e
?
:
 
n
u
m
b
e
r
 
}
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
/
5
0
 
p
-
3
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
B
u
c
k
e
t
s
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
b
u
c
k
e
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
 
i
s
A
c
t
 
=
 
i
 
=
=
=
 
a
c
t
i
v
e
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
{
`
m
i
n
-
w
-
1
6
 
m
i
n
-
h
-
2
4
 
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
-
2
 
p
-
1
.
5
 
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
 
g
a
p
-
1
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
A
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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
 
b
g
-
l
i
m
e
-
4
0
0
/
1
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
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
5
0
0
"
>
B
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
-
r
e
v
e
r
s
e
 
g
a
p
-
1
 
f
l
e
x
-
1
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
b
.
m
a
p
(
(
v
,
 
k
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
k
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
0
.
5
 
r
o
u
n
d
e
d
 
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
t
o
n
e
-
9
0
0
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
 
 
F
r
a
m
e
 
t
y
p
e
 
&
 
p
a
r
s
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


 
 
i
n
p
u
t
?
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


 
 
i
n
p
u
t
S
t
a
t
e
s
?
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
;


 
 
i
n
p
u
t
P
o
i
n
t
e
r
s
?
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
;


 
 
c
o
u
n
t
?
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
o
u
n
t
S
t
a
t
e
s
?
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
;


 
 
c
o
u
n
t
P
o
i
n
t
e
r
s
?
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
;


 
 
o
u
t
p
u
t
?
:
 
(
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
)
[
]
;


 
 
o
u
t
p
u
t
S
t
a
t
e
s
?
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
;


 
 
o
u
t
p
u
t
P
o
i
n
t
e
r
s
?
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
;


 
 
b
u
c
k
e
t
s
?
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


 
 
b
u
c
k
e
t
A
c
t
i
v
e
?
:
 
n
u
m
b
e
r
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
K
e
y
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
A
r
r
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
 
=
 
1
0
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
m
a
p
(
(
x
)
 
=
>
 
N
u
m
b
e
r
(
x
.
t
r
i
m
(
)
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
s
o
m
e
(
(
n
)
 
=
>
 
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
n
)
 
|
|
 
n
 
<
 
0
)
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
 
<
 
2
 
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
u
n
t
i
n
g
 
S
o
r
t
 
f
r
a
m
e
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
C
O
U
N
T
I
N
G
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
c
o
u
n
t
i
n
g
S
o
r
t
(
A
,
 
k
)
:
"
,


 
 
"
 
 
c
o
u
n
t
 
<
-
 
a
r
r
a
y
 
o
f
 
k
+
1
 
z
e
r
o
s
"
,


 
 
"
 
 
f
o
r
 
x
 
i
n
 
A
:
 
c
o
u
n
t
[
x
]
 
+
=
 
1
"
,


 
 
"
 
 
f
o
r
 
i
 
f
r
o
m
 
1
 
t
o
 
k
:
 
c
o
u
n
t
[
i
]
 
+
=
 
c
o
u
n
t
[
i
-
1
]
"
,


 
 
"
 
 
o
u
t
p
u
t
 
<
-
 
e
m
p
t
y
 
a
r
r
a
y
 
o
f
 
l
e
n
g
t
h
 
n
"
,


 
 
"
 
 
f
o
r
 
i
 
f
r
o
m
 
n
-
1
 
d
o
w
n
 
t
o
 
0
:
"
,


 
 
"
 
 
 
 
o
u
t
p
u
t
[
c
o
u
n
t
[
A
[
i
]
]
 
-
 
1
]
 
<
-
 
A
[
i
]
"
,


 
 
"
 
 
 
 
c
o
u
n
t
[
A
[
i
]
]
 
-
=
 
1
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
 
b
u
i
l
d
C
o
u
n
t
i
n
g
F
r
a
m
e
s
(
a
r
r
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
 
n
 
=
 
a
r
r
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
k
 
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
.
.
.
a
r
r
)
;


 
 
c
o
n
s
t
 
c
o
u
n
t
 
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
k
 
+
 
1
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
 
o
u
t
p
u
t
:
 
(
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
)
[
]
 
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
n
)
.
f
i
l
l
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
 
f
:
 
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
 
n
,
 
k
 
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
C
o
u
n
t
i
n
g
 
s
o
r
t
 
o
n
 
$
{
n
}
 
e
l
e
m
e
n
t
s
,
 
m
a
x
 
v
a
l
u
e
 
k
 
=
 
$
{
k
}
.
`
,
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
,
 
c
o
u
n
t
:
 
[
.
.
.
c
o
u
n
t
]
,
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
 
}
)
;


 
 
f
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
,
 
v
a
r
s
:
 
{
 
n
,
 
k
 
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
C
r
e
a
t
e
 
c
o
u
n
t
 
a
r
r
a
y
 
o
f
 
s
i
z
e
 
$
{
k
 
+
 
1
}
,
 
a
l
l
 
z
e
r
o
s
.
`
,
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
,
 
c
o
u
n
t
:
 
[
.
.
.
c
o
u
n
t
]
,
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
 
}
)
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
 
n
;
 
i
+
+
)
 
{


 
 
 
 
c
o
u
n
t
[
a
r
r
[
i
]
]
+
+
;


 
 
 
 
c
o
n
s
t
 
i
n
p
u
t
S
t
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
 
=
 
a
r
r
.
m
a
p
(
(
_
,
 
k
k
)
 
=
>
 
(
k
k
 
=
=
=
 
i
 
?
 
"
c
o
m
p
a
r
e
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
;


 
 
 
 
c
o
n
s
t
 
c
n
t
S
t
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
 
=
 
c
o
u
n
t
.
m
a
p
(
(
_
,
 
k
k
)
 
=
>
 
(
k
k
 
=
=
=
 
a
r
r
[
i
]
 
?
 
"
a
c
t
i
v
e
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
;


 
 
 
 
f
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
,
 
"
A
[
i
]
"
:
 
a
r
r
[
i
]
,
 
"
c
o
u
n
t
[
A
[
i
]
]
"
:
 
c
o
u
n
t
[
a
r
r
[
i
]
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
C
o
u
n
t
 
o
c
c
u
r
r
e
n
c
e
s
:
 
c
o
u
n
t
[
$
{
a
r
r
[
i
]
}
]
 
-
>
 
$
{
c
o
u
n
t
[
a
r
r
[
i
]
]
}
`
,


 
 
 
 
 
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
,
 
i
n
p
u
t
S
t
a
t
e
s
:
 
i
n
p
u
t
S
t
,
 
i
n
p
u
t
P
o
i
n
t
e
r
s
:
 
{
 
i
 
}
,


 
 
 
 
 
 
c
o
u
n
t
:
 
[
.
.
.
c
o
u
n
t
]
,
 
c
o
u
n
t
S
t
a
t
e
s
:
 
c
n
t
S
t
,
 
c
o
u
n
t
P
o
i
n
t
e
r
s
:
 
{
 
"
A
[
i
]
"
:
 
a
r
r
[
i
]
 
}
,


 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
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
K
e
y
:
 
`
c
o
u
n
t
[
$
{
a
r
r
[
i
]
}
]
`
,


 
 
 
 
}
)
;


 
 
}




 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
1
;
 
i
 
<
=
 
k
;
 
i
+
+
)
 
{


 
 
 
 
c
o
u
n
t
[
i
]
 
+
=
 
c
o
u
n
t
[
i
 
-
 
1
]
;


 
 
 
 
c
o
n
s
t
 
c
n
t
S
t
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
 
=
 
c
o
u
n
t
.
m
a
p
(
(
_
,
 
k
k
)
 
=
>
 
(
k
k
 
=
=
=
 
i
 
?
 
"
s
w
a
p
"
 
:
 
k
k
 
=
=
=
 
i
 
-
 
1
 
?
 
"
c
o
m
p
a
r
e
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
;


 
 
 
 
f
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
 
i
,
 
"
c
o
u
n
t
[
i
]
"
:
 
c
o
u
n
t
[
i
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
C
u
m
u
l
a
t
i
v
e
:
 
c
o
u
n
t
[
$
{
i
}
]
 
+
=
 
c
o
u
n
t
[
$
{
i
 
-
 
1
}
]
 
-
>
 
$
{
c
o
u
n
t
[
i
]
}
.
`
,


 
 
 
 
 
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
,
 
c
o
u
n
t
:
 
[
.
.
.
c
o
u
n
t
]
,
 
c
o
u
n
t
S
t
a
t
e
s
:
 
c
n
t
S
t
,
 
c
o
u
n
t
P
o
i
n
t
e
r
s
:
 
{
 
i
 
}
,


 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
}
)
;


 
 
}




 
 
f
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
 
4
,
 
v
a
r
s
:
 
{
 
n
 
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
A
l
l
o
c
a
t
e
 
o
u
t
p
u
t
 
a
r
r
a
y
 
o
f
 
l
e
n
g
t
h
 
$
{
n
}
.
`
,
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
,
 
c
o
u
n
t
:
 
[
.
.
.
c
o
u
n
t
]
,
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
 
}
)
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
 
n
 
-
 
1
;
 
i
 
>
=
 
0
;
 
i
-
-
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
 
=
 
c
o
u
n
t
[
a
r
r
[
i
]
]
 
-
 
1
;


 
 
 
 
o
u
t
p
u
t
[
p
o
s
]
 
=
 
a
r
r
[
i
]
;


 
 
 
 
c
o
u
n
t
[
a
r
r
[
i
]
]
-
-
;


 
 
 
 
c
o
n
s
t
 
i
n
p
u
t
S
t
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
 
=
 
a
r
r
.
m
a
p
(
(
_
,
 
k
k
)
 
=
>
 
(
k
k
 
=
=
=
 
i
 
?
 
"
c
o
m
p
a
r
e
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
;


 
 
 
 
c
o
n
s
t
 
c
n
t
S
t
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
 
=
 
c
o
u
n
t
.
m
a
p
(
(
_
,
 
k
k
)
 
=
>
 
(
k
k
 
=
=
=
 
a
r
r
[
i
]
 
?
 
"
a
c
t
i
v
e
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
;


 
 
 
 
c
o
n
s
t
 
o
u
t
S
t
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
 
=
 
o
u
t
p
u
t
.
m
a
p
(
(
_
,
 
k
k
)
 
=
>
 
(
k
k
 
=
=
=
 
p
o
s
 
?
 
"
d
o
n
e
"
 
:
 
o
u
t
p
u
t
[
k
k
]
 
!
=
=
 
n
u
l
l
 
?
 
"
s
o
r
t
e
d
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
;


 
 
 
 
f
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
 
6
,
 
v
a
r
s
:
 
{
 
i
,
 
"
A
[
i
]
"
:
 
a
r
r
[
i
]
,
 
p
o
s
 
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
P
l
a
c
e
 
A
[
$
{
i
}
]
 
=
 
$
{
a
r
r
[
i
]
}
 
a
t
 
o
u
t
p
u
t
[
$
{
p
o
s
}
]
.
 
D
e
c
r
e
m
e
n
t
 
c
o
u
n
t
[
$
{
a
r
r
[
i
]
}
]
 
t
o
 
$
{
c
o
u
n
t
[
a
r
r
[
i
]
]
}
.
`
,


 
 
 
 
 
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
,
 
i
n
p
u
t
S
t
a
t
e
s
:
 
i
n
p
u
t
S
t
,
 
i
n
p
u
t
P
o
i
n
t
e
r
s
:
 
{
 
i
 
}
,


 
 
 
 
 
 
c
o
u
n
t
:
 
[
.
.
.
c
o
u
n
t
]
,
 
c
o
u
n
t
S
t
a
t
e
s
:
 
c
n
t
S
t
,
 
c
o
u
n
t
P
o
i
n
t
e
r
s
:
 
{
 
"
A
[
i
]
"
:
 
a
r
r
[
i
]
 
}
,


 
 
 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,
 
o
u
t
p
u
t
S
t
a
t
e
s
:
 
o
u
t
S
t
,
 
o
u
t
p
u
t
P
o
i
n
t
e
r
s
:
 
{
 
p
o
s
 
}
,


 
 
 
 
}
)
;


 
 
}




 
 
f
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
 
n
,
 
k
 
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
o
n
e
.
 
O
u
t
p
u
t
:
 
[
$
{
o
u
t
p
u
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
}
]
.
`
,
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
,
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,
 
o
u
t
p
u
t
S
t
a
t
e
s
:
 
o
u
t
p
u
t
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
s
o
r
t
e
d
"
 
a
s
 
C
e
l
l
S
t
a
t
e
)
 
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
;


}




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
 
 
R
a
d
i
x
 
S
o
r
t
 
(
L
S
D
)
 
f
r
a
m
e
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
A
D
I
X
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
r
a
d
i
x
S
o
r
t
(
A
)
:
"
,


 
 
"
 
 
d
 
<
-
 
n
u
m
b
e
r
 
o
f
 
d
i
g
i
t
s
 
i
n
 
m
a
x
(
A
)
"
,


 
 
"
 
 
f
o
r
 
d
i
g
i
t
 
f
r
o
m
 
0
 
t
o
 
d
-
1
:
 
 
 
 
 
 
 
 
/
/
 
L
S
D
"
,


 
 
"
 
 
 
 
A
 
<
-
 
s
t
a
b
l
e
 
c
o
u
n
t
i
n
g
 
s
o
r
t
 
o
f
 
A
 
b
y
 
t
h
i
s
 
d
i
g
i
t
"
,


 
 
"
 
 
r
e
t
u
r
n
 
A
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
 
b
u
i
l
d
R
a
d
i
x
F
r
a
m
e
s
(
i
n
p
u
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
 
a
r
r
 
=
 
[
.
.
.
i
n
p
u
t
]
;


 
 
c
o
n
s
t
 
n
 
=
 
a
r
r
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
m
a
x
 
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
.
.
.
a
r
r
)
;


 
 
c
o
n
s
t
 
d
 
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
1
,
 
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
l
o
g
1
0
(
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
 
m
a
x
)
)
)
 
+
 
1
)
;


 
 
c
o
n
s
t
 
f
:
 
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
 
n
,
 
m
a
x
,
 
d
i
g
i
t
s
:
 
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
 
`
R
a
d
i
x
 
s
o
r
t
:
 
$
{
n
}
 
n
u
m
b
e
r
s
,
 
m
a
x
 
=
 
$
{
m
a
x
}
,
 
$
{
d
}
 
d
i
g
i
t
(
s
)
.
`
,
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
 
}
)
;




 
 
f
o
r
 
(
l
e
t
 
p
a
s
s
 
=
 
0
;
 
p
a
s
s
 
<
 
d
;
 
p
a
s
s
+
+
)
 
{


 
 
 
 
c
o
n
s
t
 
p
l
a
c
e
 
=
 
M
a
t
h
.
p
o
w
(
1
0
,
 
p
a
s
s
)
;


 
 
 
 
c
o
n
s
t
 
c
o
u
n
t
 
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
1
0
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


 
 
 
 
f
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
 
d
i
g
i
t
:
 
p
a
s
s
,
 
p
l
a
c
e
 
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
P
a
s
s
 
$
{
p
a
s
s
 
+
 
1
}
:
 
s
o
r
t
 
b
y
 
d
i
g
i
t
 
a
t
 
p
l
a
c
e
 
$
{
p
l
a
c
e
}
 
(
$
{
[
"
u
n
i
t
s
"
,
 
"
t
e
n
s
"
,
 
"
h
u
n
d
r
e
d
s
"
,
 
"
t
h
o
u
s
a
n
d
s
"
]
[
p
a
s
s
]
 
?
?
 
`
1
0
^
$
{
p
a
s
s
}
`
}
)
.
`
,
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
 
}
)
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
 
n
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
 
d
0
 
=
 
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
a
r
r
[
i
]
 
/
 
p
l
a
c
e
)
 
%
 
1
0
;


 
 
 
 
 
 
c
o
u
n
t
[
d
0
]
+
+
;


 
 
 
 
 
 
c
o
n
s
t
 
i
n
p
u
t
S
t
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
 
=
 
a
r
r
.
m
a
p
(
(
_
,
 
k
k
)
 
=
>
 
(
k
k
 
=
=
=
 
i
 
?
 
"
c
o
m
p
a
r
e
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
;


 
 
 
 
 
 
c
o
n
s
t
 
c
n
t
S
t
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
 
=
 
c
o
u
n
t
.
m
a
p
(
(
_
,
 
k
k
)
 
=
>
 
(
k
k
 
=
=
=
 
d
0
 
?
 
"
a
c
t
i
v
e
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
;


 
 
 
 
 
 
f
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
 
i
,
 
"
A
[
i
]
"
:
 
a
r
r
[
i
]
,
 
d
i
g
i
t
:
 
d
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
A
[
$
{
i
}
]
 
=
 
$
{
a
r
r
[
i
]
}
,
 
d
i
g
i
t
 
a
t
 
p
l
a
c
e
 
$
{
p
l
a
c
e
}
 
=
 
$
{
d
0
}
.
 
c
o
u
n
t
[
$
{
d
0
}
]
 
-
>
 
$
{
c
o
u
n
t
[
d
0
]
}
`
,


 
 
 
 
 
 
 
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
,
 
i
n
p
u
t
S
t
a
t
e
s
:
 
i
n
p
u
t
S
t
,
 
i
n
p
u
t
P
o
i
n
t
e
r
s
:
 
{
 
i
 
}
,


 
 
 
 
 
 
 
 
c
o
u
n
t
:
 
[
.
.
.
c
o
u
n
t
]
,
 
c
o
u
n
t
S
t
a
t
e
s
:
 
c
n
t
S
t
,
 
c
o
u
n
t
P
o
i
n
t
e
r
s
:
 
{
 
d
i
g
i
t
:
 
d
0
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}




 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
1
;
 
i
 
<
 
1
0
;
 
i
+
+
)
 
c
o
u
n
t
[
i
]
 
+
=
 
c
o
u
n
t
[
i
 
-
 
1
]
;


 
 
 
 
f
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
 
d
i
g
i
t
:
 
p
a
s
s
 
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
C
u
m
u
l
a
t
i
v
e
 
c
o
u
n
t
s
 
c
o
m
p
u
t
e
d
.
`
,
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
,
 
c
o
u
n
t
:
 
[
.
.
.
c
o
u
n
t
]
 
}
)
;




 
 
 
 
c
o
n
s
t
 
o
u
t
p
u
t
:
 
(
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
)
[
]
 
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
n
)
.
f
i
l
l
(
n
u
l
l
)
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
 
n
 
-
 
1
;
 
i
 
>
=
 
0
;
 
i
-
-
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
d
0
 
=
 
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
a
r
r
[
i
]
 
/
 
p
l
a
c
e
)
 
%
 
1
0
;


 
 
 
 
 
 
c
o
n
s
t
 
p
o
s
 
=
 
c
o
u
n
t
[
d
0
]
 
-
 
1
;


 
 
 
 
 
 
o
u
t
p
u
t
[
p
o
s
]
 
=
 
a
r
r
[
i
]
;


 
 
 
 
 
 
c
o
u
n
t
[
d
0
]
-
-
;


 
 
 
 
 
 
c
o
n
s
t
 
i
n
p
u
t
S
t
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
 
=
 
a
r
r
.
m
a
p
(
(
_
,
 
k
k
)
 
=
>
 
(
k
k
 
=
=
=
 
i
 
?
 
"
c
o
m
p
a
r
e
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
;


 
 
 
 
 
 
c
o
n
s
t
 
o
u
t
S
t
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
 
=
 
o
u
t
p
u
t
.
m
a
p
(
(
_
,
 
k
k
)
 
=
>
 
(
k
k
 
=
=
=
 
p
o
s
 
?
 
"
d
o
n
e
"
 
:
 
o
u
t
p
u
t
[
k
k
]
 
!
=
=
 
n
u
l
l
 
?
 
"
s
o
r
t
e
d
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
;


 
 
 
 
 
 
f
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
 
i
,
 
"
A
[
i
]
"
:
 
a
r
r
[
i
]
,
 
d
i
g
i
t
:
 
d
0
,
 
p
o
s
 
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
P
l
a
c
e
 
A
[
$
{
i
}
]
 
=
 
$
{
a
r
r
[
i
]
}
 
a
t
 
o
u
t
p
u
t
[
$
{
p
o
s
}
]
`
,


 
 
 
 
 
 
 
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
,
 
i
n
p
u
t
S
t
a
t
e
s
:
 
i
n
p
u
t
S
t
,
 
i
n
p
u
t
P
o
i
n
t
e
r
s
:
 
{
 
i
 
}
,


 
 
 
 
 
 
 
 
c
o
u
n
t
:
 
[
.
.
.
c
o
u
n
t
]
,
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,
 
o
u
t
p
u
t
S
t
a
t
e
s
:
 
o
u
t
S
t
,
 
o
u
t
p
u
t
P
o
i
n
t
e
r
s
:
 
{
 
p
o
s
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}




 
 
 
 
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
 
n
;
 
i
+
+
)
 
a
r
r
[
i
]
 
=
 
o
u
t
p
u
t
[
i
]
!
;


 
 
 
 
f
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
 
d
i
g
i
t
:
 
p
a
s
s
 
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
n
d
 
o
f
 
p
a
s
s
 
$
{
p
a
s
s
 
+
 
1
}
.
 
A
r
r
a
y
:
 
[
$
{
a
r
r
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
]
`
,
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
,
 
i
n
p
u
t
S
t
a
t
e
s
:
 
a
r
r
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
s
o
r
t
e
d
"
 
a
s
 
C
e
l
l
S
t
a
t
e
)
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
K
e
y
:
 
"
d
i
g
i
t
"
 
}
)
;


 
 
}




 
 
f
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
 
n
,
 
d
i
g
i
t
s
:
 
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
 
`
D
o
n
e
.
 
S
o
r
t
e
d
:
 
[
$
{
a
r
r
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
]
`
,
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
,
 
i
n
p
u
t
S
t
a
t
e
s
:
 
a
r
r
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
s
o
r
t
e
d
"
 
a
s
 
C
e
l
l
S
t
a
t
e
)
 
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
;


}




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
 
 
B
u
c
k
e
t
 
S
o
r
t
 
f
r
a
m
e
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
U
C
K
E
T
 
=
 
[


 
 
"
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
c
k
e
t
S
o
r
t
(
A
,
 
k
)
:
"
,


 
 
"
 
 
c
r
e
a
t
e
 
k
 
e
m
p
t
y
 
b
u
c
k
e
t
s
"
,


 
 
"
 
 
f
o
r
 
x
 
i
n
 
A
:
"
,


 
 
"
 
 
 
 
p
l
a
c
e
 
x
 
i
n
t
o
 
b
u
c
k
e
t
 
f
l
o
o
r
(
x
 
*
 
k
 
/
 
(
m
a
x
+
1
)
)
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
 
b
u
c
k
e
t
:
 
s
o
r
t
 
(
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
o
r
t
)
"
,


 
 
"
 
 
c
o
n
c
a
t
e
n
a
t
e
 
b
u
c
k
e
t
s
 
i
n
 
o
r
d
e
r
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
 
b
u
i
l
d
B
u
c
k
e
t
F
r
a
m
e
s
(
i
n
p
u
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
,
 
n
u
m
B
u
c
k
e
t
s
 
=
 
4
)
:
 
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
 
a
r
r
 
=
 
[
.
.
.
i
n
p
u
t
]
;


 
 
c
o
n
s
t
 
n
 
=
 
a
r
r
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
m
a
x
 
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
.
.
.
a
r
r
)
;


 
 
c
o
n
s
t
 
b
u
c
k
e
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
[
]
 
=
 
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
n
u
m
B
u
c
k
e
t
s
 
}
,
 
(
)
 
=
>
 
[
]
)
;


 
 
c
o
n
s
t
 
f
:
 
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
 
n
,
 
b
u
c
k
e
t
s
:
 
n
u
m
B
u
c
k
e
t
s
 
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
B
u
c
k
e
t
 
s
o
r
t
 
w
i
t
h
 
$
{
n
u
m
B
u
c
k
e
t
s
}
 
b
u
c
k
e
t
s
 
o
n
 
[
$
{
a
r
r
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
]
`
,
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
,
 
b
u
c
k
e
t
s
:
 
b
u
c
k
e
t
s
.
m
a
p
(
(
b
)
 
=
>
 
[
.
.
.
b
]
)
 
}
)
;


 
 
f
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
,
 
v
a
r
s
:
 
{
 
b
u
c
k
e
t
s
:
 
n
u
m
B
u
c
k
e
t
s
 
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
C
r
e
a
t
e
d
 
$
{
n
u
m
B
u
c
k
e
t
s
}
 
e
m
p
t
y
 
b
u
c
k
e
t
s
.
`
,
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
,
 
b
u
c
k
e
t
s
:
 
b
u
c
k
e
t
s
.
m
a
p
(
(
b
)
 
=
>
 
[
.
.
.
b
]
)
 
}
)
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
 
n
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
 
b
I
d
x
 
=
 
M
a
t
h
.
m
i
n
(
n
u
m
B
u
c
k
e
t
s
 
-
 
1
,
 
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
(
a
r
r
[
i
]
 
*
 
n
u
m
B
u
c
k
e
t
s
)
 
/
 
(
m
a
x
 
+
 
1
)
)
)
;


 
 
 
 
b
u
c
k
e
t
s
[
b
I
d
x
]
.
p
u
s
h
(
a
r
r
[
i
]
)
;


 
 
 
 
c
o
n
s
t
 
i
n
p
u
t
S
t
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
 
=
 
a
r
r
.
m
a
p
(
(
_
,
 
k
k
)
 
=
>
 
(
k
k
 
=
=
=
 
i
 
?
 
"
c
o
m
p
a
r
e
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
;


 
 
 
 
f
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
 
i
,
 
"
A
[
i
]
"
:
 
a
r
r
[
i
]
,
 
b
u
c
k
e
t
:
 
b
I
d
x
 
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
A
[
$
{
i
}
]
 
=
 
$
{
a
r
r
[
i
]
}
 
g
o
e
s
 
i
n
t
o
 
b
u
c
k
e
t
 
$
{
b
I
d
x
}
.
`
,
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
,
 
i
n
p
u
t
S
t
a
t
e
s
:
 
i
n
p
u
t
S
t
,
 
i
n
p
u
t
P
o
i
n
t
e
r
s
:
 
{
 
i
 
}
,
 
b
u
c
k
e
t
s
:
 
b
u
c
k
e
t
s
.
m
a
p
(
(
b
)
 
=
>
 
[
.
.
.
b
]
)
,
 
b
u
c
k
e
t
A
c
t
i
v
e
:
 
b
I
d
x
 
}
)
;


 
 
}




 
 
f
o
r
 
(
l
e
t
 
b
 
=
 
0
;
 
b
 
<
 
n
u
m
B
u
c
k
e
t
s
;
 
b
+
+
)
 
{


 
 
 
 
i
f
 
(
b
u
c
k
e
t
s
[
b
]
.
l
e
n
g
t
h
 
<
 
2
)
 
{


 
 
 
 
 
 
f
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
 
4
,
 
v
a
r
s
:
 
{
 
b
u
c
k
e
t
:
 
b
 
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
B
u
c
k
e
t
 
$
{
b
}
 
h
a
s
 
$
{
b
u
c
k
e
t
s
[
b
]
.
l
e
n
g
t
h
}
 
e
l
e
m
e
n
t
(
s
)
 
-
 
a
l
r
e
a
d
y
 
s
o
r
t
e
d
.
`
,
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
,
 
b
u
c
k
e
t
s
:
 
b
u
c
k
e
t
s
.
m
a
p
(
(
b
b
)
 
=
>
 
[
.
.
.
b
b
]
)
,
 
b
u
c
k
e
t
A
c
t
i
v
e
:
 
b
 
}
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


 
 
 
 
c
o
n
s
t
 
b
u
c
k
e
t
 
=
 
b
u
c
k
e
t
s
[
b
]
;


 
 
 
 
f
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
 
4
,
 
v
a
r
s
:
 
{
 
b
u
c
k
e
t
:
 
b
,
 
s
i
z
e
:
 
b
u
c
k
e
t
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
I
n
s
e
r
t
i
o
n
-
s
o
r
t
 
b
u
c
k
e
t
 
$
{
b
}
:
 
[
$
{
b
u
c
k
e
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
}
]
`
,
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
,
 
b
u
c
k
e
t
s
:
 
b
u
c
k
e
t
s
.
m
a
p
(
(
b
b
)
 
=
>
 
[
.
.
.
b
b
]
)
,
 
b
u
c
k
e
t
A
c
t
i
v
e
:
 
b
 
}
)
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
 
1
;
 
i
 
<
 
b
u
c
k
e
t
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
 
k
e
y
 
=
 
b
u
c
k
e
t
[
i
]
;


 
 
 
 
 
 
l
e
t
 
j
 
=
 
i
 
-
 
1
;


 
 
 
 
 
 
w
h
i
l
e
 
(
j
 
>
=
 
0
 
&
&
 
b
u
c
k
e
t
[
j
]
 
>
 
k
e
y
)
 
{
 
b
u
c
k
e
t
[
j
 
+
 
1
]
 
=
 
b
u
c
k
e
t
[
j
]
;
 
j
-
-
;
 
}


 
 
 
 
 
 
b
u
c
k
e
t
[
j
 
+
 
1
]
 
=
 
k
e
y
;


 
 
 
 
 
 
f
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
 
4
,
 
v
a
r
s
:
 
{
 
b
u
c
k
e
t
:
 
b
,
 
i
,
 
k
e
y
 
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
B
u
c
k
e
t
 
$
{
b
}
 
a
f
t
e
r
 
p
l
a
c
i
n
g
 
$
{
k
e
y
}
:
 
[
$
{
b
u
c
k
e
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
}
]
`
,
 
i
n
p
u
t
:
 
[
.
.
.
a
r
r
]
,
 
b
u
c
k
e
t
s
:
 
b
u
c
k
e
t
s
.
m
a
p
(
(
b
b
)
 
=
>
 
[
.
.
.
b
b
]
)
,
 
b
u
c
k
e
t
A
c
t
i
v
e
:
 
b
 
}
)
;


 
 
 
 
}


 
 
}




 
 
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
:
 
n
u
m
b
e
r
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
 
b
 
o
f
 
b
u
c
k
e
t
s
)
 
s
o
r
t
e
d
.
p
u
s
h
(
.
.
.
b
)
;


 
 
f
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
 
n
 
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
C
o
n
c
a
t
e
n
a
t
e
 
b
u
c
k
e
t
s
 
-
>
 
[
$
{
s
o
r
t
e
d
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
]
`
,
 
i
n
p
u
t
:
 
[
.
.
.
s
o
r
t
e
d
]
,
 
i
n
p
u
t
S
t
a
t
e
s
:
 
s
o
r
t
e
d
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
s
o
r
t
e
d
"
 
a
s
 
C
e
l
l
S
t
a
t
e
)
,
 
b
u
c
k
e
t
s
:
 
b
u
c
k
e
t
s
.
m
a
p
(
(
b
b
)
 
=
>
 
[
.
.
.
b
b
]
)
 
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
;


}




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
 
 
V
i
s
u
a
l
i
z
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




t
y
p
e
 
A
l
g
o
 
=
 
"
c
o
u
n
t
i
n
g
"
 
|
 
"
r
a
d
i
x
"
 
|
 
"
b
u
c
k
e
t
"
;




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
a
l
g
o
,
 
s
e
t
A
l
g
o
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
A
l
g
o
>
(
"
c
o
u
n
t
i
n
g
"
)
;


 
 
c
o
n
s
t
 
[
c
o
u
n
t
i
n
g
S
t
r
,
 
s
e
t
C
o
u
n
t
i
n
g
S
t
r
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
4
,
 
2
,
 
2
,
 
8
,
 
3
,
 
3
,
 
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
r
a
d
i
x
S
t
r
,
 
s
e
t
R
a
d
i
x
S
t
r
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
7
0
,
 
4
5
,
 
7
5
,
 
9
0
,
 
8
0
2
,
 
2
4
,
 
2
,
 
6
6
"
)
;


 
 
c
o
n
s
t
 
[
b
u
c
k
e
t
S
t
r
,
 
s
e
t
B
u
c
k
e
t
S
t
r
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
2
9
,
 
2
5
,
 
3
,
 
4
9
,
 
9
,
 
3
7
,
 
2
1
,
 
4
3
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
 
c
o
u
n
t
A
r
r
 
=
 
p
a
r
s
e
A
r
r
(
c
o
u
n
t
i
n
g
S
t
r
,
 
8
)
 
?
?
 
[
4
,
 
2
,
 
2
,
 
8
,
 
3
,
 
3
,
 
1
]
;


 
 
 
 
c
o
n
s
t
 
r
a
d
i
x
A
r
r
 
=
 
p
a
r
s
e
A
r
r
(
r
a
d
i
x
S
t
r
,
 
8
)
 
?
?
 
[
1
7
0
,
 
4
5
,
 
7
5
,
 
9
0
,
 
8
0
2
,
 
2
4
,
 
2
,
 
6
6
]
;


 
 
 
 
c
o
n
s
t
 
b
u
c
k
e
t
A
r
r
 
=
 
p
a
r
s
e
A
r
r
(
b
u
c
k
e
t
S
t
r
,
 
1
0
)
 
?
?
 
[
2
9
,
 
2
5
,
 
3
,
 
4
9
,
 
9
,
 
3
7
,
 
2
1
,
 
4
3
]
;


 
 
 
 
i
f
 
(
a
l
g
o
 
=
=
=
 
"
c
o
u
n
t
i
n
g
"
)
 
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
C
o
u
n
t
i
n
g
F
r
a
m
e
s
(
c
o
u
n
t
A
r
r
)
;


 
 
 
 
i
f
 
(
a
l
g
o
 
=
=
=
 
"
r
a
d
i
x
"
)
 
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
R
a
d
i
x
F
r
a
m
e
s
(
r
a
d
i
x
A
r
r
)
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
u
c
k
e
t
F
r
a
m
e
s
(
b
u
c
k
e
t
A
r
r
,
 
4
)
;


 
 
}
,
 
[
a
l
g
o
,
 
c
o
u
n
t
i
n
g
S
t
r
,
 
r
a
d
i
x
S
t
r
,
 
b
u
c
k
e
t
S
t
r
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
 
=


 
 
 
 
a
l
g
o
 
=
=
=
 
"
c
o
u
n
t
i
n
g
"
 
?
 
P
S
E
U
D
O
_
C
O
U
N
T
I
N
G
 
:
 
a
l
g
o
 
=
=
=
 
"
r
a
d
i
x
"
 
?
 
P
S
E
U
D
O
_
R
A
D
I
X
 
:
 
P
S
E
U
D
O
_
B
U
C
K
E
T
;




 
 
c
o
n
s
t
 
i
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
 
=


 
 
 
 
a
l
g
o
 
=
=
=
 
"
c
o
u
n
t
i
n
g
"
 
?
 
(


 
 
 
 
 
 
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
A
r
r
a
y
 
(
v
a
l
u
e
s
 
0
.
.
9
,
 
s
i
z
e
 
<
=
 
8
)
"


 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
c
o
u
n
t
i
n
g
S
t
r
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
e
.
g
.
 
4
,
 
2
,
 
2
,
 
8
,
 
3
,
 
3
,
 
1
"


 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
C
o
u
n
t
i
n
g
 
s
o
r
t
 
n
e
e
d
s
 
a
 
s
m
a
l
l
 
v
a
l
u
e
 
r
a
n
g
e
 
k
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
S
m
a
l
l
 
r
a
n
g
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
4
,
 
2
,
 
2
,
 
8
,
 
3
,
 
3
,
 
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
D
u
p
l
i
c
a
t
e
s
"
,
 
v
a
l
u
e
:
 
"
3
,
 
3
,
 
3
,
 
1
,
 
1
,
 
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
S
o
r
t
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
0
,
 
1
,
 
2
,
 
3
,
 
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
 
{


 
 
 
 
 
 
 
 
 
 
i
f
 
(
p
a
r
s
e
A
r
r
(
v
,
 
8
)
)
 
s
e
t
C
o
u
n
t
i
n
g
S
t
r
(
v
)
;


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
/
>


 
 
 
 
)
 
:
 
a
l
g
o
 
=
=
=
 
"
r
a
d
i
x
"
 
?
 
(


 
 
 
 
 
 
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
A
r
r
a
y
 
o
f
 
n
o
n
-
n
e
g
a
t
i
v
e
 
i
n
t
e
g
e
r
s
 
(
s
i
z
e
 
<
=
 
8
)
"


 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
r
a
d
i
x
S
t
r
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
e
.
g
.
 
1
7
0
,
 
4
5
,
 
7
5
,
 
9
0
,
 
8
0
2
,
 
2
4
,
 
2
,
 
6
6
"


 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
R
a
d
i
x
 
s
o
r
t
s
 
d
i
g
i
t
-
b
y
-
d
i
g
i
t
 
f
r
o
m
 
u
n
i
t
s
 
t
o
 
m
o
s
t
-
s
i
g
n
i
f
i
c
a
n
t
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
3
-
d
i
g
i
t
 
m
i
x
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
7
0
,
 
4
5
,
 
7
5
,
 
9
0
,
 
8
0
2
,
 
2
4
,
 
2
,
 
6
6
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
2
-
d
i
g
i
t
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
9
,
 
1
3
,
 
4
8
,
 
6
1
,
 
5
,
 
9
0
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
o
r
t
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
1
1
,
 
2
2
,
 
3
3
,
 
4
4
,
 
5
5
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
A
r
r
(
v
,
 
8
)
)
 
s
e
t
R
a
d
i
x
S
t
r
(
v
)
;


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
/
>


 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
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
A
r
r
a
y
 
o
f
 
n
o
n
-
n
e
g
a
t
i
v
e
 
i
n
t
s
 
(
s
i
z
e
 
<
=
 
1
0
)
"


 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
b
u
c
k
e
t
S
t
r
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
e
.
g
.
 
2
9
,
 
2
5
,
 
3
,
 
4
9
,
 
9
,
 
3
7
,
 
2
1
,
 
4
3
"


 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
B
u
c
k
e
t
 
s
o
r
t
 
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
s
 
b
y
 
r
a
n
g
e
,
 
s
o
r
t
s
 
e
a
c
h
 
b
u
c
k
e
t
,
 
c
o
n
c
a
t
e
n
a
t
e
s
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
S
p
r
e
a
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
2
9
,
 
2
5
,
 
3
,
 
4
9
,
 
9
,
 
3
7
,
 
2
1
,
 
4
3
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
C
l
u
s
t
e
r
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
1
,
 
2
,
 
1
,
 
3
,
 
2
,
 
4
,
 
1
,
 
3
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
 
1
2
,
 
3
3
,
 
8
9
,
 
7
,
 
6
1
,
 
2
4
,
 
4
2
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
A
r
r
(
v
,
 
1
0
)
)
 
s
e
t
B
u
c
k
e
t
S
t
r
(
v
)
;


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
/
>


 
 
 
 
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
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
{
(
[
"
c
o
u
n
t
i
n
g
"
,
 
"
r
a
d
i
x
"
,
 
"
b
u
c
k
e
t
"
]
 
a
s
 
c
o
n
s
t
)
.
m
a
p
(
(
a
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
a
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
A
l
g
o
(
a
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
a
l
g
o
 
=
=
=
 
a
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
 
c
a
p
i
t
a
l
i
z
e
"
>
{
a
}
 
S
o
r
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
{
a
l
g
o
 
=
=
=
 
"
c
o
u
n
t
i
n
g
"
 
?
 
"
C
o
u
n
t
i
n
g
 
S
o
r
t
"
 
:
 
a
l
g
o
 
=
=
=
 
"
r
a
d
i
x
"
 
?
 
"
R
a
d
i
x
 
S
o
r
t
 
(
L
S
D
)
"
 
:
 
"
B
u
c
k
e
t
 
S
o
r
t
"
}


 
 
 
 
 
 
 
 
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
i
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
 
f
l
a
s
h
K
e
y
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
h
i
g
h
l
i
g
h
t
K
e
y
 
?
 
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
K
e
y
]
 
:
 
[
]
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
"
>


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
i
n
p
u
t
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
M
i
n
i
B
a
r
s
 
v
a
l
u
e
s
=
{
f
r
a
m
e
.
i
n
p
u
t
}
 
s
t
a
t
e
s
=
{
f
r
a
m
e
.
i
n
p
u
t
S
t
a
t
e
s
}
 
p
o
i
n
t
e
r
s
=
{
f
r
a
m
e
.
i
n
p
u
t
P
o
i
n
t
e
r
s
}
 
l
a
b
e
l
=
"
I
n
p
u
t
 
A
r
r
a
y
"
 
/
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
c
o
u
n
t
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
M
i
n
i
B
a
r
s
 
v
a
l
u
e
s
=
{
f
r
a
m
e
.
c
o
u
n
t
}
 
s
t
a
t
e
s
=
{
f
r
a
m
e
.
c
o
u
n
t
S
t
a
t
e
s
}
 
p
o
i
n
t
e
r
s
=
{
f
r
a
m
e
.
c
o
u
n
t
P
o
i
n
t
e
r
s
}
 
l
a
b
e
l
=
"
C
o
u
n
t
 
A
r
r
a
y
 
(
i
n
d
e
x
 
=
 
v
a
l
u
e
,
 
b
a
r
 
=
 
f
r
e
q
u
e
n
c
y
)
"
 
/
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
o
u
t
p
u
t
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
O
u
t
p
u
t
S
t
r
i
p
 
v
a
l
u
e
s
=
{
f
r
a
m
e
.
o
u
t
p
u
t
}
 
s
t
a
t
e
s
=
{
f
r
a
m
e
.
o
u
t
p
u
t
S
t
a
t
e
s
}
 
p
o
i
n
t
e
r
s
=
{
f
r
a
m
e
.
o
u
t
p
u
t
P
o
i
n
t
e
r
s
}
 
/
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
b
u
c
k
e
t
s
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
c
k
e
t
s
V
i
e
w
 
b
u
c
k
e
t
s
=
{
f
r
a
m
e
.
b
u
c
k
e
t
s
}
 
a
c
t
i
v
e
=
{
f
r
a
m
e
.
b
u
c
k
e
t
A
c
t
i
v
e
}
 
/
>


 
 
 
 
 
 
 
 
 
 
)
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
 
t
h
e
 
a
l
g
o
r
i
t
h
m
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
 
 
L
e
a
r
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
p
r
o
p
s
 
=
 
[


 
 
 
 
{
 
t
:
 
"
C
o
u
n
t
i
n
g
 
s
o
r
t
"
,
 
b
:
 
"
A
s
s
u
m
e
s
 
k
e
y
s
 
a
r
e
 
i
n
t
e
g
e
r
s
 
i
n
 
[
0
.
.
k
]
.
 
C
o
u
n
t
 
f
r
e
q
u
e
n
c
i
e
s
,
 
b
u
i
l
d
 
c
u
m
u
l
a
t
i
v
e
,
 
p
l
a
c
e
.
 
O
(
n
+
k
)
 
t
i
m
e
,
 
s
t
a
b
l
e
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
R
a
d
i
x
 
s
o
r
t
"
,
 
b
:
 
"
S
o
r
t
 
b
y
 
e
a
c
h
 
d
i
g
i
t
 
f
r
o
m
 
l
e
a
s
t
 
t
o
 
m
o
s
t
 
s
i
g
n
i
f
i
c
a
n
t
,
 
u
s
i
n
g
 
a
 
s
t
a
b
l
e
 
s
u
b
-
s
o
r
t
 
(
u
s
u
a
l
l
y
 
c
o
u
n
t
i
n
g
)
.
 
O
(
d
*
(
n
+
b
)
)
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
B
u
c
k
e
t
 
s
o
r
t
"
,
 
b
:
 
"
D
i
s
t
r
i
b
u
t
e
 
i
n
t
o
 
k
 
b
u
c
k
e
t
s
 
b
y
 
v
a
l
u
e
 
r
a
n
g
e
,
 
s
o
r
t
 
e
a
c
h
 
b
u
c
k
e
t
,
 
c
o
n
c
a
t
e
n
a
t
e
.
 
O
(
n
+
k
)
 
e
x
p
e
c
t
e
d
 
o
n
 
u
n
i
f
o
r
m
 
i
n
p
u
t
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
T
r
a
d
e
-
o
f
f
"
,
 
b
:
 
"
A
l
l
 
t
h
r
e
e
 
n
e
e
d
 
e
x
t
r
a
 
m
e
m
o
r
y
 
O
(
n
+
k
)
.
 
T
h
e
y
 
s
h
i
n
e
 
w
h
e
n
 
k
 
i
s
 
s
m
a
l
l
 
o
r
 
d
a
t
a
 
i
s
 
w
e
l
l
-
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
o
r
t
i
n
g
 
w
i
t
h
o
u
t
 
c
o
m
p
a
r
i
s
o
n
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
B
e
a
t
 
t
h
e
 
O
m
e
g
a
(
n
 
l
o
g
 
n
)
 
b
o
u
n
d
 
b
y
 
e
x
p
l
o
i
t
i
n
g
 
k
e
y
 
s
t
r
u
c
t
u
r
e
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


 
 
 
 
 
 
 
 
 
 
C
o
m
p
a
r
i
s
o
n
 
s
o
r
t
s
 
(
b
u
b
b
l
e
,
 
m
e
r
g
e
,
 
q
u
i
c
k
)
 
h
a
v
e
 
a
 
p
r
o
v
e
n
 
l
o
w
e
r
 
b
o
u
n
d
 
o
f
 
O
m
e
g
a
(
n
 
l
o
g
 
n
)
.
 
T
h
e


 
 
 
 
 
 
 
 
 
 
o
n
l
y
 
w
a
y
 
t
o
 
b
e
a
t
 
i
t
 
i
s
 
t
o
 
n
o
t
 
c
o
m
p
a
r
e
;
 
i
n
s
t
e
a
d
 
e
x
p
l
o
i
t
 
s
t
r
u
c
t
u
r
e
 
o
f
 
t
h
e
 
k
e
y
s
 
(
s
m
a
l
l
 
r
a
n
g
e
,


 
 
 
 
 
 
 
 
 
 
d
i
g
i
t
s
,
 
u
n
i
f
o
r
m
 
d
i
s
t
r
i
b
u
t
i
o
n
)
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
r
i
d
-
c
o
l
s
-
1
 
s
m
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
{
p
r
o
p
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
 
 
T
r
y
 
I
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
C
o
u
n
t
i
n
g
 
s
o
r
t
 
o
n
 
[
3
,
0
,
2
,
3
,
1
,
0
]
 
-
 
a
f
t
e
r
 
c
u
m
u
l
a
t
i
v
e
,
 
c
o
u
n
t
 
=
 
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
2
 
3
 
4
 
6
"
 
}
,


 
 
 
 
{
 
q
:
 
"
R
a
d
i
x
 
s
o
r
t
 
p
a
s
s
e
s
 
n
e
e
d
e
d
 
f
o
r
 
m
a
x
 
v
a
l
u
e
 
9
9
9
9
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
B
u
c
k
e
t
 
s
o
r
t
 
o
n
 
n
 
e
l
e
m
e
n
t
s
 
w
i
t
h
 
n
 
b
u
c
k
e
t
s
,
 
u
n
i
f
o
r
m
 
i
n
p
u
t
:
 
e
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
n
)
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
(
s
t
r
i
n
g
 
|
 
n
u
l
l
)
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
 
n
u
l
l
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
W
a
l
k
 
t
h
r
o
u
g
h
 
e
a
c
h
 
a
l
g
o
r
i
t
h
m
 
w
i
t
h
 
t
h
e
 
g
i
v
e
n
 
i
n
p
u
t
.
 
W
r
i
t
e
 
o
u
t
 
t
h
e
 
i
n
t
e
r
m
e
d
i
a
t
e
 
a
r
r
a
y
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
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
g
 
=
 
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
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
v
e
a
l
e
d
 
=
 
s
h
o
w
n
[
i
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
r
r
e
c
t
 
=
 
g
 
!
=
=
 
n
u
l
l
 
&
&
 
g
.
t
r
i
m
(
)
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
\
s
+
/
g
,
 
"
 
"
)
 
=
=
=
 
p
.
a
n
s
w
e
r
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
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
3
 
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
s
t
o
n
e
-
5
0
0
"
>
#
{
i
 
+
 
1
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
m
 
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
5
2
 
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
p
.
q
}
<
/
s
p
a
n
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
 
?
?
 
"
"
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
 
v
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
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
v
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
w
-
3
6
 
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
3
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
1
0
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
?
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
 
v
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
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
v
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
m
e
d
i
u
m
 
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
3
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
5
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
r
e
v
e
a
l
e
d
 
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
{
`
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
r
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
l
i
m
e
-
4
0
0
/
1
0
 
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
l
i
m
e
-
3
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
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
r
o
s
e
-
5
0
0
/
1
0
 
t
e
x
t
-
r
o
s
e
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
r
o
s
e
-
3
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
r
o
s
e
-
5
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
r
r
e
c
t
 
?
 
`
C
o
r
r
e
c
t
 
-
 
$
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
`
 
:
 
`
A
n
s
w
e
r
:
 
$
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
`
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


 
 
)
;


}




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
4
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
T
h
e
 
O
m
e
g
a
(
n
 
l
o
g
 
n
)
 
c
o
m
p
a
r
i
s
o
n
 
b
a
r
r
i
e
r
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
 
d
e
c
i
s
i
o
n
 
t
r
e
e
 
s
o
r
t
i
n
g
 
n
!
 
p
e
r
m
u
t
a
t
i
o
n
s
 
n
e
e
d
s
 
l
o
g
(
n
!
)
 
=
 
T
h
e
t
a
(
n
 
l
o
g
 
n
)
 
c
o
m
p
a
r
i
s
o
n
s
.


 
 
 
 
 
 
 
 
 
 
N
o
n
-
c
o
m
p
a
r
i
s
o
n
 
s
o
r
t
s
 
e
s
c
a
p
e
 
t
h
i
s
 
b
y
 
i
n
s
p
e
c
t
i
n
g
 
k
e
y
 
s
t
r
u
c
t
u
r
e
,
 
n
o
t
 
c
o
m
p
a
r
i
n
g
 
w
h
o
l
e
 
k
e
y
s
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
W
h
y
 
L
S
D
 
f
o
r
 
r
a
d
i
x
?
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


 
 
 
 
 
 
 
 
 
 
L
e
a
s
t
-
S
i
g
n
i
f
i
c
a
n
t
-
D
i
g
i
t
 
f
i
r
s
t
,
 
u
s
i
n
g
 
a
 
s
t
a
b
l
e
 
s
u
b
-
s
o
r
t
,
 
g
u
a
r
a
n
t
e
e
s
 
t
h
e
 
f
i
n
a
l
 
o
r
d
e
r
 
i
s


 
 
 
 
 
 
 
 
 
 
c
o
r
r
e
c
t
.
 
I
f
 
t
w
o
 
n
u
m
b
e
r
s
 
t
i
e
 
o
n
 
d
i
g
i
t
 
d
,
 
t
h
e
i
r
 
r
e
l
a
t
i
v
e
 
o
r
d
e
r
 
f
r
o
m
 
t
h
e
 
p
r
e
v
i
o
u
s
 
(
l
o
w
e
r
)


 
 
 
 
 
 
 
 
 
 
d
i
g
i
t
 
p
a
s
s
 
i
s
 
p
r
e
s
e
r
v
e
d
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
I
n
t
e
r
v
i
e
w
 
h
o
o
k
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
u
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
l
i
s
t
-
d
i
s
c
 
p
l
-
5
 
s
p
a
c
e
-
y
-
1
 
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


 
 
 
 
 
 
 
 
 
 
<
l
i
>
C
o
u
n
t
i
n
g
 
s
o
r
t
:
 
T
h
e
t
a
(
n
 
+
 
k
)
.
 
N
o
t
 
u
s
e
f
u
l
 
w
h
e
n
 
k
 
i
s
 
m
u
c
h
 
l
a
r
g
e
r
 
t
h
a
n
 
n
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
a
d
i
x
:
 
T
h
e
t
a
(
d
*
(
n
+
b
)
)
 
w
h
e
r
e
 
b
 
i
s
 
b
a
s
e
.
 
O
f
t
e
n
 
d
 
i
s
 
t
r
e
a
t
e
d
 
a
s
 
c
o
n
s
t
a
n
t
:
 
T
h
e
t
a
(
n
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
B
u
c
k
e
t
:
 
O
(
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
 
o
n
 
u
n
i
f
o
r
m
,
 
O
(
n
²
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
 
i
f
 
a
l
l
 
f
a
l
l
 
i
n
t
o
 
o
n
e
 
b
u
c
k
e
t
.
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
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
5
_
N
o
n
C
o
m
p
a
r
i
s
o
n
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


 
 
 
 
.
.
.
(
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G


 
 
 
 
 
 
?
 
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
d
:
 
"
p
r
a
c
t
i
c
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
P
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
<
C
o
d
e
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
P
r
a
c
t
i
c
e
T
a
b
 
t
o
p
i
c
S
l
u
g
=
{
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
}
 
/
>
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]


 
 
 
 
 
 
:
 
[
]
)
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
C
o
u
n
t
i
n
g
 
s
o
r
t
 
r
u
n
s
 
i
n
 
O
(
n
 
+
 
k
)
.
 
W
h
a
t
 
d
o
e
s
 
k
 
r
e
p
r
e
s
e
n
t
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
N
u
m
b
e
r
 
o
f
 
d
i
s
t
i
n
c
t
 
e
l
e
m
e
n
t
s
"
,


 
 
 
 
 
 
 
 
"
R
a
n
g
e
 
o
f
 
t
h
e
 
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
s
"
,


 
 
 
 
 
 
 
 
"
R
e
c
u
r
s
i
o
n
 
d
e
p
t
h
"
,


 
 
 
 
 
 
 
 
"
N
u
m
b
e
r
 
o
f
 
b
u
c
k
e
t
s
"
,


 
 
 
 
 
 
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
k
 
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
 
k
e
y
 
v
a
l
u
e
 
(
r
a
n
g
e
)
.
 
I
f
 
k
 
=
 
O
(
n
)
,
 
t
o
t
a
l
 
i
s
 
O
(
n
)
;
 
i
f
 
k
 
=
 
O
(
n
²
)
,
 
i
t
 
d
e
g
r
a
d
e
s
 
t
o
 
O
(
n
²
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
W
h
y
 
m
u
s
t
 
t
h
e
 
s
u
b
-
s
o
r
t
 
i
n
 
r
a
d
i
x
 
s
o
r
t
 
b
e
 
s
t
a
b
l
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
T
o
 
s
a
v
e
 
m
e
m
o
r
y
"
,


 
 
 
 
 
 
 
 
"
E
q
u
a
l
 
e
l
e
m
e
n
t
s
 
o
n
 
t
h
e
 
c
u
r
r
e
n
t
 
d
i
g
i
t
 
m
u
s
t
 
k
e
e
p
 
t
h
e
i
r
 
o
r
d
e
r
 
f
r
o
m
 
t
h
e
 
p
r
e
v
i
o
u
s
 
p
a
s
s
"
,


 
 
 
 
 
 
 
 
"
I
n
s
t
a
b
i
l
i
t
y
 
m
a
k
e
s
 
i
t
 
O
(
n
²
)
"
,


 
 
 
 
 
 
 
 
"
S
t
a
b
i
l
i
t
y
 
i
s
 
n
o
t
 
r
e
q
u
i
r
e
d
"
,


 
 
 
 
 
 
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
L
S
D
 
r
a
d
i
x
 
r
e
l
i
e
s
 
o
n
 
s
t
a
b
i
l
i
t
y
:
 
t
i
e
s
 
o
n
 
d
i
g
i
t
 
d
 
a
r
e
 
b
r
o
k
e
n
 
b
y
 
t
h
e
 
o
r
d
e
r
 
e
s
t
a
b
l
i
s
h
e
d
 
o
n
 
d
i
g
i
t
 
d
-
1
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
T
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
 
o
f
 
r
a
d
i
x
 
s
o
r
t
 
o
n
 
n
 
i
n
t
e
g
e
r
s
 
e
a
c
h
 
w
i
t
h
 
d
 
d
i
g
i
t
s
 
i
n
 
b
a
s
e
 
b
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
O
(
n
 
l
o
g
 
n
)
"
,
 
"
O
(
d
*
(
n
 
+
 
b
)
)
"
,
 
"
O
(
n
²
)
"
,
 
"
O
(
d
*
n
*
b
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
E
a
c
h
 
o
f
 
d
 
p
a
s
s
e
s
 
i
s
 
a
 
c
o
u
n
t
i
n
g
 
s
o
r
t
 
o
v
e
r
 
b
a
s
e
 
b
:
 
O
(
n
 
+
 
b
)
.
 
T
o
t
a
l
:
 
O
(
d
*
(
n
 
+
 
b
)
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
B
u
c
k
e
t
 
s
o
r
t
'
s
 
w
o
r
s
t
 
c
a
s
e
 
i
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
n
 
l
o
g
 
n
)
"
,
 
"
O
(
n
 
+
 
k
)
"
,
 
"
O
(
n
²
)
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
 
2
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
 
e
v
e
r
y
 
e
l
e
m
e
n
t
 
l
a
n
d
s
 
i
n
 
t
h
e
 
s
a
m
e
 
b
u
c
k
e
t
,
 
y
o
u
 
p
a
y
 
t
h
e
 
s
u
b
-
s
o
r
t
 
c
o
s
t
 
(
t
y
p
i
c
a
l
l
y
 
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
o
r
t
)
 
o
n
 
n
 
i
t
e
m
s
:
 
O
(
n
²
)
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
N
o
n
-
C
o
m
p
a
r
i
s
o
n
 
S
o
r
t
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
5
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
5
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
R
a
r
e
l
y
 
a
s
k
e
d
 
d
i
r
e
c
t
l
y
;
 
a
p
p
e
a
r
s
 
i
n
 
'
s
o
r
t
 
t
h
i
s
 
s
t
r
i
n
g
 
a
r
r
a
y
'
 
s
t
y
l
e
 
p
r
o
b
l
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
B
i
n
a
r
y
 
S
e
a
r
c
h
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


