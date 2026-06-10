
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
 
C
h
e
c
k
C
i
r
c
l
e
2
,
 
A
l
e
r
t
C
i
r
c
l
e
,
 
X
C
i
r
c
l
e
 
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
 
t
y
p
e
 
{
 
A
t
s
K
e
y
w
o
r
d
A
n
a
l
y
s
i
s
 
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
 
s
e
c
t
i
o
n
K
i
c
k
e
r
C
l
s
 
}
 
f
r
o
m
 
"
.
/
a
t
s
-
u
i
"
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
 
K
e
y
w
o
r
d
A
n
a
l
y
s
i
s
P
a
n
e
l
(
{


 
 
k
e
y
w
o
r
d
A
n
a
l
y
s
i
s
,


}
:
 
{


 
 
k
e
y
w
o
r
d
A
n
a
l
y
s
i
s
:
 
A
t
s
K
e
y
w
o
r
d
A
n
a
l
y
s
i
s
;


}
)
 
{


 
 
c
o
n
s
t
 
f
o
u
n
d
 
=
 
k
e
y
w
o
r
d
A
n
a
l
y
s
i
s
.
f
o
u
n
d
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
 
p
a
r
t
i
a
l
 
=
 
(
k
e
y
w
o
r
d
A
n
a
l
y
s
i
s
.
p
a
r
t
i
a
l
 
?
?
 
[
]
)
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
i
s
s
i
n
g
 
=
 
k
e
y
w
o
r
d
A
n
a
l
y
s
i
s
.
m
i
s
s
i
n
g
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
 
t
o
t
a
l
 
=
 
f
o
u
n
d
 
+
 
p
a
r
t
i
a
l
 
+
 
m
i
s
s
i
n
g
;


 
 
c
o
n
s
t
 
p
F
o
u
n
d
 
=
 
t
o
t
a
l
 
>
 
0
 
?
 
M
a
t
h
.
r
o
u
n
d
(
(
f
o
u
n
d
 
/
 
t
o
t
a
l
)
 
*
 
1
0
0
)
 
:
 
0
;


 
 
c
o
n
s
t
 
p
P
a
r
t
i
a
l
 
=
 
t
o
t
a
l
 
>
 
0
 
?
 
M
a
t
h
.
r
o
u
n
d
(
(
p
a
r
t
i
a
l
 
/
 
t
o
t
a
l
)
 
*
 
1
0
0
)
 
:
 
0
;


 
 
c
o
n
s
t
 
p
M
i
s
s
i
n
g
 
=
 
t
o
t
a
l
 
>
 
0
 
?
 
1
0
0
 
-
 
p
F
o
u
n
d
 
-
 
p
P
a
r
t
i
a
l
 
:
 
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
"
k
e
y
w
o
r
d
s
"


 
 
 
 
 
 
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
 
x
:
 
-
8
 
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
 
x
:
 
0
 
}
}


 
 
 
 
 
 
e
x
i
t
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
 
x
:
 
8
 
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
8
 
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
s
p
a
c
e
-
y
-
5
"


 
 
 
 
>


 
 
 
 
 
 
{
/
*
 
S
u
m
m
a
r
y
 
b
a
r
 
*
/
}


 
 
 
 
 
 
{
t
o
t
a
l
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
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
 
m
b
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
{
s
e
c
t
i
o
n
K
i
c
k
e
r
C
l
s
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
h
-
1
 
w
-
1
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
t
a
l
}
 
k
e
y
w
o
r
d
s
 
a
n
a
l
y
s
e
d


 
 
 
 
 
 
 
 
 
 
 
 
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
2
 
h
-
2
 
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
"
 
/
>
{
f
o
u
n
d
}
 
p
r
e
s
e
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
2
 
h
-
2
 
b
g
-
a
m
b
e
r
-
4
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
s
m
"
 
/
>
{
p
a
r
t
i
a
l
}
 
p
a
r
t
i
a
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
2
 
h
-
2
 
b
g
-
r
e
d
-
4
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
s
m
"
 
/
>
{
m
i
s
s
i
n
g
}
 
m
i
s
s
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
h
-
2
 
r
o
u
n
d
e
d
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
h
i
d
d
e
n
 
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
p
F
o
u
n
d
 
>
 
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
 
r
o
u
n
d
e
d
-
f
u
l
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
 
`
$
{
S
t
r
i
n
g
(
p
F
o
u
n
d
)
}
%
`
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
P
a
r
t
i
a
l
 
>
 
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
b
g
-
a
m
b
e
r
-
4
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
f
u
l
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
 
`
$
{
S
t
r
i
n
g
(
p
P
a
r
t
i
a
l
)
}
%
`
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
M
i
s
s
i
n
g
 
>
 
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
b
g
-
r
e
d
-
4
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
f
u
l
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
 
`
$
{
S
t
r
i
n
g
(
p
M
i
s
s
i
n
g
)
}
%
`
 
}
}
 
/
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
d
i
v
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
/
*
 
T
h
r
e
e
 
c
o
l
u
m
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
3
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
{
/
*
 
P
r
e
s
e
n
t
 
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
l
i
m
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
l
i
m
e
-
9
0
0
/
5
0
 
b
g
-
l
i
m
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
l
i
m
e
-
4
0
0
/
5
 
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
 
g
a
p
-
2
 
p
x
-
3
 
p
y
-
2
 
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
l
i
m
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
l
i
m
e
-
9
0
0
/
5
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
C
i
r
c
l
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
 
P
r
e
s
e
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
 
b
g
-
l
i
m
e
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
l
i
m
e
-
4
0
0
/
2
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
4
0
0
 
p
x
-
1
.
5
 
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
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
k
e
y
w
o
r
d
A
n
a
l
y
s
i
s
.
f
o
u
n
d
.
l
e
n
g
t
h
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
-
3
 
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
 
m
i
n
-
h
-
1
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
k
e
y
w
o
r
d
A
n
a
l
y
s
i
s
.
f
o
u
n
d
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
 
i
t
a
l
i
c
 
s
e
l
f
-
c
e
n
t
e
r
 
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
c
e
n
t
e
r
"
>
N
o
n
e
 
d
e
t
e
c
t
e
d
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
k
e
y
w
o
r
d
A
n
a
l
y
s
i
s
.
f
o
u
n
d
.
m
a
p
(
(
k
w
)
 
=
>
 
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
k
w
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
 
b
g
-
l
i
m
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
4
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
l
i
m
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
l
i
m
e
-
4
0
0
/
3
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
l
i
m
e
-
5
0
0
 
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
>
✓
<
/
s
p
a
n
>
 
{
k
w
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
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
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
P
a
r
t
i
a
l
 
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
d
a
s
h
e
d
 
b
o
r
d
e
r
-
a
m
b
e
r
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
5
0
 
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
4
0
0
/
5
 
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
 
g
a
p
-
2
 
p
x
-
3
 
p
y
-
2
 
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
a
m
b
e
r
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
5
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
a
m
b
e
r
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
a
m
b
e
r
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
l
e
r
t
C
i
r
c
l
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
 
P
a
r
t
i
a
l


 
 
 
 
 
 
 
 
 
 
 
 
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
 
b
g
-
a
m
b
e
r
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
a
m
b
e
r
-
4
0
0
/
2
0
 
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
a
m
b
e
r
-
4
0
0
 
p
x
-
1
.
5
 
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
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
k
e
y
w
o
r
d
A
n
a
l
y
s
i
s
.
p
a
r
t
i
a
l
 
?
?
 
[
]
)
.
l
e
n
g
t
h
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
-
3
 
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
 
m
i
n
-
h
-
1
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
(
k
e
y
w
o
r
d
A
n
a
l
y
s
i
s
.
p
a
r
t
i
a
l
 
?
?
 
[
]
)
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
 
i
t
a
l
i
c
 
s
e
l
f
-
c
e
n
t
e
r
 
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
c
e
n
t
e
r
"
>
N
o
 
p
a
r
t
i
a
l
 
k
e
y
w
o
r
d
s
 
d
e
t
e
c
t
e
d
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(
k
e
y
w
o
r
d
A
n
a
l
y
s
i
s
.
p
a
r
t
i
a
l
 
?
?
 
[
]
)
.
m
a
p
(
(
k
w
)
 
=
>
 
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
k
w
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
a
m
b
e
r
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
a
m
b
e
r
-
4
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
d
a
s
h
e
d
 
b
o
r
d
e
r
-
a
m
b
e
r
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
a
m
b
e
r
-
4
0
0
/
3
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
a
m
b
e
r
-
5
0
0
 
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
>
~
<
/
s
p
a
n
>
 
{
k
w
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
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
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
M
i
s
s
i
n
g
 
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
d
a
s
h
e
d
 
b
o
r
d
e
r
-
r
e
d
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
r
e
d
-
9
0
0
/
5
0
 
b
g
-
r
e
d
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
r
e
d
-
4
0
0
/
5
 
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
 
g
a
p
-
2
 
p
x
-
3
 
p
y
-
2
 
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
r
e
d
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
r
e
d
-
9
0
0
/
5
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
r
e
d
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
e
d
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
C
i
r
c
l
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
 
M
i
s
s
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
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
 
b
g
-
r
e
d
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
r
e
d
-
4
0
0
/
2
0
 
t
e
x
t
-
r
e
d
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
e
d
-
4
0
0
 
p
x
-
1
.
5
 
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
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
k
e
y
w
o
r
d
A
n
a
l
y
s
i
s
.
m
i
s
s
i
n
g
.
l
e
n
g
t
h
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
-
3
 
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
 
m
i
n
-
h
-
1
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
k
e
y
w
o
r
d
A
n
a
l
y
s
i
s
.
m
i
s
s
i
n
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
 
i
t
a
l
i
c
 
s
e
l
f
-
c
e
n
t
e
r
 
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
c
e
n
t
e
r
"
>
N
o
n
e
 
—
 
g
r
e
a
t
 
c
o
v
e
r
a
g
e
!
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
k
e
y
w
o
r
d
A
n
a
l
y
s
i
s
.
m
i
s
s
i
n
g
.
m
a
p
(
(
k
w
)
 
=
>
 
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
k
w
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
 
b
g
-
r
e
d
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
r
e
d
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
r
e
d
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
e
d
-
4
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
d
a
s
h
e
d
 
b
o
r
d
e
r
-
r
e
d
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
r
e
d
-
4
0
0
/
3
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
r
e
d
-
5
0
0
 
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
>
+
<
/
s
p
a
n
>
 
{
k
w
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
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




 
 
 
 
 
 
{
k
e
y
w
o
r
d
A
n
a
l
y
s
i
s
.
f
o
u
n
d
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
k
e
y
w
o
r
d
A
n
a
l
y
s
i
s
.
p
a
r
t
i
a
l
 
?
?
 
[
]
)
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


 
 
 
 
 
 
 
 
k
e
y
w
o
r
d
A
n
a
l
y
s
i
s
.
m
i
s
s
i
n
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
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
5
0
0
 
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
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
N
o
 
k
e
y
w
o
r
d
 
d
a
t
a
 
a
v
a
i
l
a
b
l
e
 
f
o
r
 
t
h
i
s
 
a
n
a
l
y
s
i
s
.


 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
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


