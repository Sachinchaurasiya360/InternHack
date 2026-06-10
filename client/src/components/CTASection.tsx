
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
 
u
s
e
I
n
V
i
e
w
 
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
 
A
r
r
o
w
R
i
g
h
t
,
 
P
l
a
y
 
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
 
u
s
e
E
f
f
e
c
t
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




f
u
n
c
t
i
o
n
 
u
s
e
C
o
u
n
t
U
p
(
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
 
i
s
I
n
V
i
e
w
:
 
b
o
o
l
e
a
n
,
 
d
u
r
a
t
i
o
n
 
=
 
2
0
0
0
)
 
{


 
 
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
,
 
s
e
t
C
o
u
n
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
0
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


 
 
 
 
i
f
 
(
!
i
s
I
n
V
i
e
w
)
 
r
e
t
u
r
n
;




 
 
 
 
l
e
t
 
s
t
a
r
t
T
i
m
e
:
 
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
 
=
 
n
u
l
l
;


 
 
 
 
c
o
n
s
t
 
s
t
a
r
t
V
a
l
u
e
 
=
 
0
;




 
 
 
 
c
o
n
s
t
 
s
t
e
p
 
=
 
(
t
i
m
e
s
t
a
m
p
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


 
 
 
 
 
 
i
f
 
(
!
s
t
a
r
t
T
i
m
e
)
 
s
t
a
r
t
T
i
m
e
 
=
 
t
i
m
e
s
t
a
m
p
;


 
 
 
 
 
 
c
o
n
s
t
 
p
r
o
g
r
e
s
s
 
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
(
t
i
m
e
s
t
a
m
p
 
-
 
s
t
a
r
t
T
i
m
e
)
 
/
 
d
u
r
a
t
i
o
n
,
 
1
)
;


 
 
 
 
 
 
/
/
 
e
a
s
e
O
u
t
Q
u
a
r
t
 
f
o
r
 
s
m
o
o
t
h
 
d
e
c
e
l
e
r
a
t
i
o
n


 
 
 
 
 
 
c
o
n
s
t
 
e
a
s
e
d
 
=
 
1
 
-
 
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
 
-
 
p
r
o
g
r
e
s
s
,
 
4
)
;


 
 
 
 
 
 
s
e
t
C
o
u
n
t
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
e
a
s
e
d
 
*
 
(
t
a
r
g
e
t
 
-
 
s
t
a
r
t
V
a
l
u
e
)
 
+
 
s
t
a
r
t
V
a
l
u
e
)
)
;


 
 
 
 
 
 
i
f
 
(
p
r
o
g
r
e
s
s
 
<
 
1
)
 
r
e
q
u
e
s
t
A
n
i
m
a
t
i
o
n
F
r
a
m
e
(
s
t
e
p
)
;


 
 
 
 
}
;




 
 
 
 
r
e
q
u
e
s
t
A
n
i
m
a
t
i
o
n
F
r
a
m
e
(
s
t
e
p
)
;


 
 
}
,
 
[
i
s
I
n
V
i
e
w
,
 
t
a
r
g
e
t
,
 
d
u
r
a
t
i
o
n
]
)
;




 
 
r
e
t
u
r
n
 
c
o
u
n
t
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
N
u
m
b
e
r
(
n
u
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
 
n
u
m
.
t
o
L
o
c
a
l
e
S
t
r
i
n
g
(
"
e
n
-
I
N
"
)
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
 
S
t
a
t
I
t
e
m
P
r
o
p
s
 
{


 
 
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


 
 
i
s
I
n
V
i
e
w
:
 
b
o
o
l
e
a
n
;


 
 
d
u
r
a
t
i
o
n
?
:
 
n
u
m
b
e
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
 
S
t
a
t
I
t
e
m
(
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
b
e
l
,
 
i
s
I
n
V
i
e
w
,
 
d
u
r
a
t
i
o
n
 
}
:
 
S
t
a
t
I
t
e
m
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
 
c
o
u
n
t
 
=
 
u
s
e
C
o
u
n
t
U
p
(
t
a
r
g
e
t
,
 
i
s
I
n
V
i
e
w
,
 
d
u
r
a
t
i
o
n
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
,
 
y
:
 
2
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
i
s
I
n
V
i
e
w
 
?
 
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
 
:
 
{
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
5
 
}
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
4
x
l
 
m
d
:
t
e
x
t
-
5
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
r
a
c
k
i
n
g
-
t
i
g
h
t
 
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
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
{
f
o
r
m
a
t
N
u
m
b
e
r
(
c
o
u
n
t
)
}


 
 
 
 
 
 
 
 
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
l
i
m
e
-
4
0
0
"
>
+
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
 
C
T
A
S
e
c
t
i
o
n
(
)
 
{


 
 
c
o
n
s
t
 
s
t
a
t
s
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
 
i
s
I
n
V
i
e
w
 
=
 
u
s
e
I
n
V
i
e
w
(
s
t
a
t
s
R
e
f
,
 
{
 
o
n
c
e
:
 
t
r
u
e
,
 
m
a
r
g
i
n
:
 
"
-
1
0
0
p
x
"
 
}
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
e
c
t
i
o
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
r
e
l
a
t
i
v
e
 
p
y
-
2
4
 
m
d
:
p
y
-
3
2
 
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
t
 
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
r
e
l
a
t
i
v
e
 
z
-
1
0
 
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
,
 
y
:
 
2
0
 
}
}


 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
I
n
V
i
e
w
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


 
 
 
 
 
 
 
 
 
 
v
i
e
w
p
o
r
t
=
{
{
 
o
n
c
e
:
 
t
r
u
e
 
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
6
 
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
e
l
a
t
i
v
e
 
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
s
t
o
n
e
-
9
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


 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
o
p
a
c
i
t
y
-
[
0
.
0
6
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
I
m
a
g
e
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
r
a
d
i
a
l
-
g
r
a
d
i
e
n
t
(
c
i
r
c
l
e
 
a
t
 
1
p
x
 
1
p
x
,
 
w
h
i
t
e
 
1
p
x
,
 
t
r
a
n
s
p
a
r
e
n
t
 
0
)
"
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
S
i
z
e
:
 
"
2
8
p
x
 
2
8
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
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
r
e
l
a
t
i
v
e
 
g
r
i
d
 
m
d
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
5
 
g
a
p
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
m
d
:
c
o
l
-
s
p
a
n
-
3
 
p
-
1
0
 
m
d
:
p
-
1
6
 
b
o
r
d
e
r
-
b
 
m
d
:
b
o
r
d
e
r
-
b
-
0
 
m
d
:
b
o
r
d
e
r
-
r
 
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
4
0
0
 
m
b
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
[
0
.
4
,
 
1
,
 
0
.
4
]
 
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
 
1
.
6
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
,
 
e
a
s
e
:
 
"
e
a
s
e
I
n
O
u
t
"
 
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
h
-
1
.
5
 
w
-
1
.
5
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
r
e
e
 
t
o
 
s
t
a
r
t
 
/
 
n
o
 
c
a
r
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
4
x
l
 
s
m
:
t
e
x
t
-
5
x
l
 
m
d
:
t
e
x
t
-
6
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
r
a
c
k
i
n
g
-
t
i
g
h
t
 
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
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Y
o
u
r
 
n
e
x
t
 
o
f
f
e
r
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
r
t
s
 
w
i
t
h
 
o
n
e
 
u
p
l
o
a
d
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
h
2
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
m
t
-
6
 
t
e
x
t
-
b
a
s
e
 
m
d
:
t
e
x
t
-
l
g
 
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
 
m
a
x
-
w
-
l
g
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
c
o
r
e
 
a
 
r
e
s
u
m
e
,
 
d
r
i
l
l
 
o
n
e
 
D
S
A
 
t
r
a
c
k
,
 
a
p
p
l
y
 
t
o
 
o
n
e
 
v
e
r
i
f
i
e
d
 
r
o
l
e
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
D
o
 
i
t
 
i
n
 
t
h
e
 
n
e
x
t
 
1
5
 
m
i
n
u
t
e
s
,
 
f
o
r
 
z
e
r
o
 
r
u
p
e
e
s
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
t
-
1
0
 
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
 
s
m
:
f
l
e
x
-
r
o
w
 
g
a
p
-
3
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
r
e
g
i
s
t
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
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
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
g
r
o
u
p
 
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
2
 
p
x
-
6
 
p
y
-
3
.
5
 
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
5
0
 
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
b
o
l
d
 
h
o
v
e
r
:
b
g
-
l
i
m
e
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
 
b
o
r
d
e
r
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
t
a
r
t
 
f
r
e
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
R
i
g
h
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
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
0
.
5
 
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
t
r
a
n
s
f
o
r
m
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
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
 
h
r
e
f
=
"
#
d
e
m
o
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
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
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
 
p
x
-
6
 
p
y
-
3
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
w
h
i
t
e
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
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
w
h
i
t
e
/
2
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
w
h
i
t
e
/
5
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
f
i
l
l
-
c
u
r
r
e
n
t
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
a
t
c
h
 
9
0
s
 
d
e
m
o


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
a
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
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
f
=
{
s
t
a
t
s
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
m
d
:
c
o
l
-
s
p
a
n
-
2
 
p
-
1
0
 
m
d
:
p
-
1
6
 
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
 
g
a
p
-
8
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
I
t
e
m
 
t
a
r
g
e
t
=
{
5
4
2
3
0
}
 
l
a
b
e
l
=
"
r
e
s
u
m
e
s
 
s
c
o
r
e
d
"
 
i
s
I
n
V
i
e
w
=
{
i
s
I
n
V
i
e
w
}
 
d
u
r
a
t
i
o
n
=
{
2
0
0
0
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
I
t
e
m
 
t
a
r
g
e
t
=
{
8
9
0
0
}
 
l
a
b
e
l
=
"
o
f
f
e
r
s
 
l
a
n
d
e
d
"
 
i
s
I
n
V
i
e
w
=
{
i
s
I
n
V
i
e
w
}
 
d
u
r
a
t
i
o
n
=
{
1
8
0
0
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
I
t
e
m
 
t
a
r
g
e
t
=
{
1
2
4
7
}
 
l
a
b
e
l
=
"
c
u
r
a
t
e
d
 
r
o
l
e
s
"
 
i
s
I
n
V
i
e
w
=
{
i
s
I
n
V
i
e
w
}
 
d
u
r
a
t
i
o
n
=
{
1
6
0
0
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


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
s
e
c
t
i
o
n
>


 
 
)
;


}
