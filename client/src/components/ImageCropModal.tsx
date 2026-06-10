
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
C
a
l
l
b
a
c
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
"
;


i
m
p
o
r
t
 
C
r
o
p
p
e
r
 
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
e
a
s
y
-
c
r
o
p
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
 
A
r
e
a
 
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
e
a
s
y
-
c
r
o
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
 
X
,
 
Z
o
o
m
I
n
,
 
Z
o
o
m
O
u
t
,
 
C
h
e
c
k
 
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


 
 
i
m
a
g
e
S
r
c
:
 
s
t
r
i
n
g
;


 
 
a
s
p
e
c
t
:
 
n
u
m
b
e
r
;


 
 
o
n
C
r
o
p
:
 
(
b
l
o
b
:
 
B
l
o
b
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




a
s
y
n
c
 
f
u
n
c
t
i
o
n
 
g
e
t
C
r
o
p
p
e
d
I
m
g
(
s
r
c
:
 
s
t
r
i
n
g
,
 
c
r
o
p
:
 
A
r
e
a
)
:
 
P
r
o
m
i
s
e
<
B
l
o
b
>
 
{


 
 
c
o
n
s
t
 
i
m
g
 
=
 
n
e
w
 
I
m
a
g
e
(
)
;


 
 
i
m
g
.
c
r
o
s
s
O
r
i
g
i
n
 
=
 
"
a
n
o
n
y
m
o
u
s
"
;


 
 
a
w
a
i
t
 
n
e
w
 
P
r
o
m
i
s
e
<
v
o
i
d
>
(
(
r
e
s
o
l
v
e
,
 
r
e
j
e
c
t
)
 
=
>
 
{


 
 
 
 
i
m
g
.
o
n
l
o
a
d
 
=
 
(
)
 
=
>
 
r
e
s
o
l
v
e
(
)
;


 
 
 
 
i
m
g
.
o
n
e
r
r
o
r
 
=
 
r
e
j
e
c
t
;


 
 
 
 
i
m
g
.
s
r
c
 
=
 
s
r
c
;


 
 
}
)
;




 
 
c
o
n
s
t
 
c
a
n
v
a
s
 
=
 
d
o
c
u
m
e
n
t
.
c
r
e
a
t
e
E
l
e
m
e
n
t
(
"
c
a
n
v
a
s
"
)
;


 
 
c
a
n
v
a
s
.
w
i
d
t
h
 
=
 
c
r
o
p
.
w
i
d
t
h
;


 
 
c
a
n
v
a
s
.
h
e
i
g
h
t
 
=
 
c
r
o
p
.
h
e
i
g
h
t
;


 
 
c
o
n
s
t
 
c
t
x
 
=
 
c
a
n
v
a
s
.
g
e
t
C
o
n
t
e
x
t
(
"
2
d
"
)
!
;


 
 
c
t
x
.
d
r
a
w
I
m
a
g
e
(
i
m
g
,
 
c
r
o
p
.
x
,
 
c
r
o
p
.
y
,
 
c
r
o
p
.
w
i
d
t
h
,
 
c
r
o
p
.
h
e
i
g
h
t
,
 
0
,
 
0
,
 
c
r
o
p
.
w
i
d
t
h
,
 
c
r
o
p
.
h
e
i
g
h
t
)
;




 
 
r
e
t
u
r
n
 
n
e
w
 
P
r
o
m
i
s
e
(
(
r
e
s
o
l
v
e
,
 
r
e
j
e
c
t
)
 
=
>
 
{


 
 
 
 
c
a
n
v
a
s
.
t
o
B
l
o
b
(
(
b
l
o
b
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
b
l
o
b
)
 
r
e
s
o
l
v
e
(
b
l
o
b
)
;


 
 
 
 
 
 
e
l
s
e
 
r
e
j
e
c
t
(
n
e
w
 
E
r
r
o
r
(
"
C
a
n
v
a
s
 
t
o
B
l
o
b
 
f
a
i
l
e
d
"
)
)
;


 
 
 
 
}
,
 
"
i
m
a
g
e
/
j
p
e
g
"
,
 
0
.
9
2
)
;


 
 
}
)
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
 
I
m
a
g
e
C
r
o
p
M
o
d
a
l
(
{
 
i
m
a
g
e
S
r
c
,
 
a
s
p
e
c
t
,
 
o
n
C
r
o
p
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
 
[
c
r
o
p
,
 
s
e
t
C
r
o
p
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
{
 
x
:
 
0
,
 
y
:
 
0
 
}
)
;


 
 
c
o
n
s
t
 
[
z
o
o
m
,
 
s
e
t
Z
o
o
m
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
1
)
;


 
 
c
o
n
s
t
 
[
c
r
o
p
p
e
d
A
r
e
a
,
 
s
e
t
C
r
o
p
p
e
d
A
r
e
a
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
r
e
a
 
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
 
[
s
a
v
i
n
g
,
 
s
e
t
S
a
v
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
 
o
n
C
r
o
p
C
o
m
p
l
e
t
e
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
_
:
 
A
r
e
a
,
 
p
i
x
e
l
s
:
 
A
r
e
a
)
 
=
>
 
{


 
 
 
 
s
e
t
C
r
o
p
p
e
d
A
r
e
a
(
p
i
x
e
l
s
)
;


 
 
}
,
 
[
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
C
o
n
f
i
r
m
 
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
!
c
r
o
p
p
e
d
A
r
e
a
)
 
r
e
t
u
r
n
;


 
 
 
 
s
e
t
S
a
v
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
 
b
l
o
b
 
=
 
a
w
a
i
t
 
g
e
t
C
r
o
p
p
e
d
I
m
g
(
i
m
a
g
e
S
r
c
,
 
c
r
o
p
p
e
d
A
r
e
a
)
;


 
 
 
 
 
 
o
n
C
r
o
p
(
b
l
o
b
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
s
e
t
S
a
v
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
 
b
g
-
b
l
a
c
k
/
6
0
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
s
m
 
p
-
4
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
 
w
-
f
u
l
l
 
m
a
x
-
w
-
l
g
 
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
"
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
5
 
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
"
>
C
r
o
p
 
I
m
a
g
e
<
/
h
3
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
p
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
a
y
-
3
0
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
 
C
r
o
p
p
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
r
e
l
a
t
i
v
e
 
w
-
f
u
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
 
h
e
i
g
h
t
:
 
3
4
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
C
r
o
p
p
e
r


 
 
 
 
 
 
 
 
 
 
 
 
i
m
a
g
e
=
{
i
m
a
g
e
S
r
c
}


 
 
 
 
 
 
 
 
 
 
 
 
c
r
o
p
=
{
c
r
o
p
}


 
 
 
 
 
 
 
 
 
 
 
 
z
o
o
m
=
{
z
o
o
m
}


 
 
 
 
 
 
 
 
 
 
 
 
a
s
p
e
c
t
=
{
a
s
p
e
c
t
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
r
o
p
C
h
a
n
g
e
=
{
s
e
t
C
r
o
p
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
Z
o
o
m
C
h
a
n
g
e
=
{
s
e
t
Z
o
o
m
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
r
o
p
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
C
r
o
p
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


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
Z
o
o
m
 
+
 
A
c
t
i
o
n
s
 
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
p
x
-
5
 
p
y
-
4
 
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
 
s
p
a
c
e
-
y
-
4
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
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
Z
o
o
m
O
u
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
 
s
h
r
i
n
k
-
0
"
 
/
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
r
a
n
g
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
x
=
{
3
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
e
p
=
{
0
.
0
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
z
o
o
m
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
Z
o
o
m
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
f
l
e
x
-
1
 
a
c
c
e
n
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
a
c
c
e
n
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
Z
o
o
m
I
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
 
s
h
r
i
n
k
-
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
p
x
-
4
 
p
y
-
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
a
n
c
e
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
h
a
n
d
l
e
C
o
n
f
i
r
m
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
s
a
v
i
n
g
 
|
|
 
!
c
r
o
p
p
e
d
A
r
e
a
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
i
n
l
i
n
e
-
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
 
p
x
-
4
 
p
y
-
2
 
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
w
h
i
t
e
 
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
 
d
a
r
k
:
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
1
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
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
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
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
a
v
i
n
g
 
?
 
"
C
r
o
p
p
i
n
g
.
.
.
"
 
:
 
"
A
p
p
l
y
"
}


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


